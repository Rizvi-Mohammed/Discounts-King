// @ts-check
import { DiscountApplicationStrategy } from "../generated/api";

/**
* @typedef {import("../generated/api").InputQuery} InputQuery
* @typedef {import("../generated/api").FunctionResult} FunctionResult
* @typedef {import("../generated/api").Target} Target
* @typedef {import("../generated/api").ProductVariant} ProductVariant
*/

/**
* @type {FunctionResult}
*/
const EMPTY_DISCOUNT = {
  discountApplicationStrategy: DiscountApplicationStrategy.First,
  discounts: [],
};

export default /**
* @param {InputQuery} input
* @returns {FunctionResult}
*/
  (input) => {
    // Define a type for your configuration, and parse it from the metafield
    /**
    * @type {{
    *  tiers: number
    *  title1: string
    *  title2: string
    *  title3: string
    *  title4: string
    *  price1: number
    *  price2: number
    *  price3: number
    *  price4: number
    *  percentage: number
    *  percentage2: number
    *  percentage3: number
    *  percentage4: number
    *  userTag: array
    *  checkUser: boolean
    * }}
    */
    const configuration = JSON.parse(
      input?.discountNode?.metafield?.value ?? "{}"
    );
    if (!configuration.price1 || !configuration.percentage) {
      return EMPTY_DISCOUNT;
    }

    const targets = input.cart.lines
      .map(line => {
        const variant = /** @type {ProductVariant} */ (line.merchandise);
        return /** @type {Target} */ ({
          productVariant: {
            id: variant.id
          }
        });
      });

    // if (configuration.checkUser) {
    //   if (input.cart.buyerIdentity != null) {
    //     if (!input.cart.buyerIdentity?.customer?) {
    //       return EMPTY_DISCOUNT;
    //     } else {
    //       return {
    //         discounts: [
    //           {
    //             targets,
    //             value: {
    //               percentage: {
    //                 // Use the configured percentage instead of a hardcoded value
    //                 value: configuration.percentage.toString()
    //               }
    //             }
    //           }
    //         ],
    //         discountApplicationStrategy: DiscountApplicationStrategy.First
    //       };
    //     };
    //   } else {
    //     return EMPTY_DISCOUNT;
    //   }
    // }

    if(configuration.tiers > 0){
      const subTotal = input.cart.cost.subtotalAmount.amount;
      if(subTotal > configuration.price1){
        return {
          discounts: [
            {
              message:configuration.title1,
              targets,
              value: {
                percentage: {
                  // Use the configured percentage instead of a hardcoded value
                  value: configuration.percentage.toString()
                }
              }
            }
          ],
          discountApplicationStrategy: DiscountApplicationStrategy.First
        };
      }else if(subTotal > configuration.price2){
        return {
          discounts: [
            {
              message: configuration.title2,
              targets,
              value: {
                percentage: {
                  // Use the configured percentage instead of a hardcoded value
                  value: configuration.percentage2.toString()
                }
              }
            }
          ],
          discountApplicationStrategy: DiscountApplicationStrategy.First
        };
      }
      else if(subTotal > configuration.price3){
        return {
          discounts: [
            {
              message: configuration.title3,
              targets,
              value: {
                percentage: {
                  // Use the configured percentage instead of a hardcoded value
                  value: configuration.percentage3.toString()
                }
              }
            }
          ],
          discountApplicationStrategy: DiscountApplicationStrategy.First
        };
      }
      else if(subTotal > configuration.price4){
        return {
          discounts: [
            {
              message: configuration.title4,
              targets,
              value: {
                percentage: {
                  // Use the configured percentage instead of a hardcoded value
                  value: configuration.percentage4.toString()
                }
              }
            }
          ],
          discountApplicationStrategy: DiscountApplicationStrategy.First
        };
      }
      else{
        return EMPTY_DISCOUNT;
      }
    }
    else{
        return {
          discounts: [
            {
            targets,
            value: {
               percentage: {
                 // Use the configured percentage instead of a hardcoded value
                  value: configuration.percentage.toString()
                }
             }
            }
         ],
         discountApplicationStrategy: DiscountApplicationStrategy.First
        };
    }



// else{
    //  return {
    //    discounts: [
    //      {
    //       targets,
    //       value: {
    //          percentage: {
    //            // Use the configured percentage instead of a hardcoded value
    //            value: configuration.percentage.toString()
    //          }
    //       }
    //      }
    //    ],
    //    discountApplicationStrategy: DiscountApplicationStrategy.First
    //  };
}
  // };
