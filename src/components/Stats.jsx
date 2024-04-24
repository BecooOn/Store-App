import { stats } from "../helper/data";
const Stats = () => {

    // const stats = [
    //     {
    //         data: "3.5M+",
    //         title: "Customers"
    //     },
    //     {
    //         data: "10M+",
    //         title: "Downloads"
    //     },
    //     {
    //         data: "100M+",
    //         title: "Countries"
    //     },
    //     {
    //         data: "150M+",
    //         title: "Total revenue"
    //     },
    // ]

    return (
        <section className="py-14">
            <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
                <div className="max-w-2xl mx-auto text-center">
                    <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                        Our customers are always happy
                    </h3>
                    <p className="mt-3">
                        Modi vitae harum laboriosam ipsa dicta autem, atque eligendi iusto veritatis voluptatem beatae iste aspernatur odio adipisci quos repudiandae nesciunt nobis rem. Consequuntur, eius!
                    </p>
                </div>
                <div className="mt-12">
                    <ul className="flex flex-col items-center justify-center gap-y-10 sm:flex-row sm:flex-wrap lg:divide-x">
                        {
                            stats.map((item, idx) => (
                                <li key={idx} className="text-center px-12 md:px-16">
                                    <h4 className="text-4xl text-main font-semibold">{item.data}</h4>
                                    <p className="mt-3 font-medium">{item.title}</p>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </section>
    )
}
export default Stats;