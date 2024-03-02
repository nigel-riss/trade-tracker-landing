import { Product } from '@/data/products';
import styles from '@/styles/Calculator.module.scss';
import {
  useEffect,
  useRef,
  useState,
} from 'react';
import clsx from 'clsx';
import API from '@/utils/api';
import PriceCard from './PriceCard';
import PlanToggle from './PlanToggle';
import CTAButton from './CTAButton';
import GhostButton from './GhostButton';


interface CalculatorProps {
  periodName: string,
  products: Product[];
}

interface CartProducts {
  [productId: string]: boolean;
}

const getProductPrice = (
  product: Product,
  periodName: string,
  isProPlan: boolean,
):number => {
  if (!isProPlan || !product.price[periodName].pro) {
    return product.price[periodName].regular;
  }
  return product.price[periodName].pro || 0;
};

const calcRawTotalPrice = (
  products: Product[],
  cartProducts: CartProducts,
  periodName: string,
  isProPlan: boolean,
) => {
  const totalPrice = products.reduce(
    (acc, product) => {
      const price = getProductPrice(
        product,
        'one',
        isProPlan,
      );

      return acc + (cartProducts[product.id] ? price : 0);
    },
    0,
  );

  return periodName === 'one' ? totalPrice : totalPrice * 3;
};

const calcTotalPrice = (
  products: Product[],
  cartProducts: CartProducts,
  periodName: string,
  isProPlan: boolean,
) => {
  let paidProductsCount = 0;
  const totalPrice = products.reduce(
    (acc, product) => {
      const price = getProductPrice(
        product,
        periodName,
        isProPlan,
      );
      paidProductsCount += cartProducts[product.id] && price ? 1 : 0;
      return acc + (cartProducts[product.id] ? price : 0);
    },
    0,
  );

  const priceMultiplier = paidProductsCount > 1 ? 1 : 1;
  return totalPrice * priceMultiplier;
};

const getCheckoutLink = (
  cartProducts: CartProducts,
  isProPlan: boolean,
  periodName: string,
) => {
  let query = API.CHECKOUT_ENDPOINT;

  Object.entries(cartProducts)
    .forEach(([productId, isPaid]) => {
      if (isPaid) {
        query += `products=${productId}`;
        if (productId !== 'pm') {
          query += isProPlan ? '_pro' : '';
        }
        query += (periodName === 'one') ? '_1m' : '_3m';
        query += '&';
      }
    });

  return query;
};


export default function Calculator(props: CalculatorProps) {
  const {
    periodName,
    products,
  } = props;

  const cart:CartProducts = {};
  products.forEach((product) => {
    cart[product.id] = false;
  });

  const [isProPlan, setIsProPlan] = useState(false);
  const [isCartVisible, setIsCartVisible] = useState(false);
  const [cartProducts, setCartProducts] = useState(cart);

  const sectionRef = useRef(null);

  useEffect(() => {
    const currentSection = sectionRef.current;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setIsCartVisible(entry.isIntersecting));
    }, { threshold: 0.5 });

    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);

  const rawTotalPrice = calcRawTotalPrice(
    products,
    cartProducts,
    periodName,
    isProPlan,
  );
  const totalPrice = calcTotalPrice(
    products,
    cartProducts,
    periodName,
    isProPlan,
  );
  const isOriginalPriceShown = rawTotalPrice !== totalPrice;

  return (
    <div
      className={styles.calculator}
      data-aos="fade-up"
      ref={sectionRef}
    >
      <div className={styles.heading}>
        <h3 className={styles.title}>
          Choose products:
        </h3>
        <PlanToggle
          isChecked={isProPlan}
          onToggle={() => setIsProPlan(!isProPlan)}
        />
      </div>

      <div className={styles.products}>
        {products
          .filter((product: Product) => !product.isComingSoon)
          .map((product: Product) => {
            const {
              id,
              title,
              calcDescription,
              features,
            } = product;

            return (
              <PriceCard
                id={id}
                isInCart={cartProducts[id]}
                key={id}
                title={title}
                subtitle={calcDescription}
                features={features}
                price={getProductPrice(product, periodName, isProPlan)}
                onPriceClick={(productId: string) => {
                  setCartProducts((prevState) => ({
                    ...prevState,
                    [productId]: !prevState[productId],
                  }));
                }}
              />
            );
          })}
      </div>

      <div
        className={clsx({
          [styles.cart]: true,
          [styles.isCartVisible]: isCartVisible,
        })}
      >
        <div className={styles.priceRow}>
          <div
            className={clsx({
              [styles.prices]: true,
              [styles.isOriginalPriceShown]: isOriginalPriceShown,
            })}
          >
            <span className={styles.originalPrice}>
              $
              {rawTotalPrice.toFixed(2)}
            </span>
            <span className={styles.currentPrice}>
              $
              {totalPrice.toFixed(2)}
            </span>
            <span className={styles.perMonth}> / per month</span>
          </div>
          <div className={styles.toggleWrapper}>
            <PlanToggle
              isChecked={isProPlan}
              onToggle={() => setIsProPlan(!isProPlan)}
            />
          </div>
        </div>
        <div className={styles.buttonsRow}>
          <CTAButton
            href={getCheckoutLink(
              cartProducts,
              isProPlan,
              periodName,
            )}
          >
            Buy
          </CTAButton>
          <GhostButton href="#">
            Free trial
          </GhostButton>
        </div>
      </div>
    </div>
  );
}
