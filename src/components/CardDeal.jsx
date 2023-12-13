import { card } from "../assets"
import style ,{layout} from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>

    <div className={layout.sectionInfo}>
      <h2 className={style.heading2}>Find a better card deal <br className="sm:block hidden" />in few easy steps.</h2>
      <p className={`${style.paragraph} max-w-[500px] mt-5`}>
        Cards with your personal color preference and features. It also comes with amazing offer 10% off on all items for a special period of time. * T&C applied
      </p>
    <Button style ="mt-10"/>
    </div>
    <div className={layout.sectionImg}>

      <img src={card} alt="card" className="w-[100%] h-[100%] " />
    </div>
  </section>

)

export default CardDeal