import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Services from './components/Services';
import Clients from './Clients';
import Testimonials from './Testimonials';
import AboutUs from './AboutUs';

import mobileAdvisoryService from './images/Mobile-Images/mobile-advisory-service.jpg';
import advisoryService1500 from './images/Services-Pages-Images/advisory-service_1500.jpg';
import advisoryService2600 from './images/Services-Pages-Images/advisory-service_2600.jpg';
import mobileProductPricing from './images/Mobile-Images/mobile-product-pricing.jpg';
import productPricing1500 from './images/Services-Pages-Images/product-pricing_1500.jpg';
import productPricing2600 from './images/Services-Pages-Images/product-pricing_2600.jpg';
import mobileChannelAccountStrategy from './images/Mobile-Images/mobile-channel-account-strategy.jpg';
import channelAccountStrategy1500 from './images/Services-Pages-Images/channel-account-strategy_1500.jpg';
import channelAccountStrategy2600 from './images/Services-Pages-Images/channel-account-strategy_2600.jpg';
import mobileLogistics from './images/Mobile-Images/mobile-logistics.jpg';
import logistics1500 from './images/Services-Pages-Images/logistics_1500.jpg';
import logistics2600 from './images/Services-Pages-Images/logistics_2600.jpg';
import mobileContractNegotiations from './images/Mobile-Images/mobile-contract-negotiations.jpg';
import contractNegotiations1500 from './images/Services-Pages-Images/contract-negotiations_1500.jpg';
import contractNegotiations2600 from './images/Services-Pages-Images/contract-negotiations_2600.jpg';
import mobileSales from './images/Mobile-Images/mobile-sales.jpg';
import sales1500 from './images/Services-Pages-Images/sales_1500.jpg';
import sales2600 from './images/Services-Pages-Images/sales_2600.jpg';
import mobileChannelMarketing from './images/Mobile-Images/mobile-channel-marketing.jpg';
import channelMarketing1500 from './images/Services-Pages-Images/channel-marketing_1500.jpg';
import channelMarketing2600 from './images/Services-Pages-Images/channel-marketing_2600.jpg';


import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route 
            path="/advisory-service" 
            render={(props) => (
              <Services title={"Advisory Service"}
              id={"advisory-service"}
              alt={"Culliton Channel Consulting Advisory Service"}
              mobileImg={mobileAdvisoryService}
              img1500={advisoryService1500}
              img2600={advisoryService2600}
              info={["Our Advisory Service is the most cost-effective way for clients to gain access to our industry insights, services, vast network of channel partners and 3rd party providers. By doing so, Advisory Service clients are able to come to market quicker and mitigate the pitfalls that the retail channel can pose. For just $1,000 a month, with a 3-month minimum commitment, clients get up to 10 hours of consulting time per month to tap into our data-driven insights, deep experience and our network of contacts. These hours can be used for channel and marketing strategy discussions, feedback on pricing, packaging or logistics plans, retail and buyer insights and contact information, contract or other document review, merchandising guidance and feedback and of course 3rd party service provider contact info. This is a great way to get started with Culliton Channel Consulting, or use us as a safety net for those not able to engage with us on a project based opportunity or longer term consulting engagement."]}
              />
            )}
           />
           <Route 
            path="/product-pricing" 
            render={(props) => (
              <Services title={"Product & Pricing"}
              id={"proudct-pricing"}
              alt={"Culliton Channel Consulting Product & Pricing"}
              mobileImg={mobileProductPricing}
              img1500={productPricing1500}
              img2600={productPricing2600}
              info={["Creating a great product is critical, but only one component of success. You must make sure your product is priced right to motivate both your target consumer and the channel partners to purchase, and to maximize your profitability. Your packaging will need to stand out on shelf and your messaging must speak effectively to the North American consumer. Additionally, the packaging format has be ready for the most likely display formats, with proper bar codes and certifications listed. Culliton Channel Consulting provides direct guidance on how to maximize the opportunity. We can perform pricing studies and margin assessments based on competitive products or similar categories. We collect firsthand information from Buyers or use cost effective survey instruments like Google Surveys. Based on our experience, we can provide direction on how products will be displayed in store and how packaging needs to support these display options. Our firm can assist with copy writing or final translations to ensure your message is conveyed effectively on the package. Making sure you have all of the little things covered up front will aid in your success and prevent costly updates down the road."]}
              />
            )}
           />
           <Route 
            path="/channel-account-strategy" 
            render={(props) => (
              <Services title={"Channel Account Strategy"}
              id={"channel-account-strategy"}
              alt={"Culliton Channel Consulting Channel Account Strategy"}
              mobileImg={mobileChannelAccountStrategy}
              img1500={channelAccountStrategy1500}
              img2600={channelAccountStrategy2600}
              info={["Ready! Fire! Aim! Is not the way you want to enter the market. It is important to plan your channel partner strategy carefully so you take your products to the resellers and retailers where they will have a high degree of success, and select channel partners that align to your financial and operational capabilities. Through our broad knowledge of North American resellers, retailers, etailers, alternative channels and customer demographics, Culliton Channel Consulting maps out the channel strategy that will most benefit our clients. We start by accessing where and how customers will interact and ultimately purchase client products, and which channel partners best support that customer base and engagement need. We then look at brand and company alignment to the target resellers or online/offline retailers. From the selected group of targets, we determine if a direct, indirect or hybrid approach is most appropriate. Finally, we determine which distributors are best positioned to serve that customer base. Culliton Channel Consulting creates Channel Strategy Guides as a project or part of a longer-term engagement."]}
              />
            )}
           />
           <Route 
            path="/logistics" 
            render={(props) => (
              <Services title={"Logistics"}
              id={"logistics"}
              alt={"Culliton Channel Consulting Logistics"}
              mobileImg={mobileLogistics}
              img1500={logistics1500}
              img2600={logistics2600}
              info={["Making smart, cost effective logistics decisions is imperative to maintaining a reliable supply chain and delivering products to customers when they are ready to purchase, while preserving company profits. Without a logistics and supply chain strategy in place, expenses associated to managing shipping, warehousing, customs and duties can get out of control. Culliton Channel Consulting utilizes its thorough knowledge and broad network to assist clients in the selection and setup of the logistics partners that are best suited for their business model and ultimately their target customer base. Our firm can manage these relations directly for our international clients or continue to advise and monitor the system in place to ensure it is optimally structured to support company growth. Be it third party logistics, freight forwarding and customs, ground logistics or fulfillment by Amazon services, our firm can help you get going quickly and smartly."]}
              />
            )}
           />
           <Route 
            path="/contract-negotiations" 
            render={(props) => (
              <Services title={"Contract Negotiations"}
              id={"contract-negotiations"}
              alt={"Culliton Channel Consulting Contract Negotiations"}
              mobileImg={mobileContractNegotiations}
              img1500={contractNegotiations1500}
              img2600={contractNegotiations2600}
              info={["The contract process and business terms are very different for customers in North America than in Europe or other regions. Your customer contract may be the difference between a profitable or very painful relationship. Shouldn't you have an expert on your side of the table? Culliton Channel Consulting has negotiated hundreds of channel agreements from both sides and we put that knowledge to use and negotiate agreements that limit the risk and exposure for our clients. We also know that getting the most favorable terms starts by getting the customer excited about the product opportunity and keeping your channel options open. We can provide insights and guidance or directly negotiate with you."]}
              />
            )}
           />
           <Route 
            path="/sales" 
            render={(props) => (
              <Services title={"Sales"}
              id={"sales"}
              alt={"Culliton Channel Consulting Sales"}
              mobileImg={mobileSales}
              img1500={sales1500}
              img2600={sales2600}
              info={["Sales is the lifeline of any company. So it would make sense that selecting your sales team is a key decision before entering the market. You want to make your selection based on experience, knowledge, broad relationships and access to the market, in order to deliver sustained and long-term growth. You want your sales team to understand your product and category and make it a priority, not be just one more brand in their bag. You want your sales team to place your product where it is a good fit for the product and for your company, financially and operationally and with proper brand alignment.",<br />,<br />, "Placing a product and hoping it will sell is usually not a strategy for success. Manufacturer's Rep Firms can be an easy solution, but these firms often lack the access and knowledge of the broader market or are unable to take a market-wide perspective. Culliton Channel Consulting has worked at all levels with virtually every retailer and the largest resellers in the US and most major retailers in Canada, and we continue to uncover new sales channels, like TV or mobile that can augment challenged offline retail segments. Through this experience, our firm helps clients generate revenue quickly and build a sustainable business for the long term. We ensure product is placed in locations that give it the best chance for success and ensure our clients understand pros and cons of dealing with each potential partner to best align opportunity with capabilities. Our firm can lead your overall channel sales efforts directly or through a virtual team of reps that we'll manage, or assist you with recruiting and hiring the best staff."]}
              />
            )}
           />
           <Route 
            path="/channel-marketing" 
            render={(props) => (
              <Services title={"Channel Marketing"}
              id={"channel-marketing"}
              alt={"Culliton Channel Consulting Channel Marketing"}
              mobileImg={mobileChannelMarketing}
              img1500={channelMarketing1500}
              img2600={channelMarketing2600}
              info={["Get products placed at target resellers or retailers is usually the biggest focus, however successful sell-through is often determined on Sales Associate training, effective instore and online merchandising, and channel marketing programs. Culliton Channel Consulting can support you every step of the way. Our firm can provide guidance, support or directly manage the creation of training, merchandising and programs. We have both in-house expertise and a robust 3rd party network of service firms to do this work for our clients."]}
              />
            )}
           />
          <Route path="/clients" component={Clients}></Route>
          <Route path="/testimonials" component={Testimonials}></Route>
          <Route path="/about-us" component={AboutUs}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
