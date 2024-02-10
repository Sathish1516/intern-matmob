import React from 'react'
import './FAQcontent.css'


const FAQcontent = () => {
  return (
        <div>
            <h1 className="faq-title">MAT MOB FAQs:</h1>
            <div className='faq'>
            <h2 className='faqsubtitle'>1. What type of furniture are you interested in renting?</h2>
            <p className='fa'>1.Sofas and Couches <br></br>
                2.Chairs (e.g., dining chairs, accent chairs)<br></br>
                3.Tables (e.g., dining tables, coffee tables, side tables)<br></br>
                4.Beds (e.g., single beds, double beds, bunk beds)<br></br>
                5.Desks<br></br>
                6.Office Chairs<br></br>
                7.Wardrobes<br></br>
                8.Dressers and Chests of Drawers 
            </p>
            <h2 className='faqsubtitle'>2. How long do you need the furniture for?</h2>
            <p className='fa'>Short-term rental (e.g., a few days, a week)<br></br>
                    Medium-term rental (e.g., a few weeks, a month)<br></br>
                    Long-term rental (e.g., several months, a year or more)<br></br>
                    Custom duration (allowing users to specify their exact rental period)
            </p>
            <h2 className='faqsubtitle'>3. What is the intended purpose of the furniture?</h2>
            <p className='fa'>What is the intended purpose of the furniture?<br></br>
                Residential use (e.g., home, apartment, rental property)<br></br>
                Office or workplace<br></br>
                Event or temporary setup (e.g., parties, conferences, exhibitions)<br></br>
                Staging or styling (e.g., real estate staging, photo shoots)<br></br>
                Hospitality industry (e.g., hotels, restaurants, cafes)<br></br>
                Educational or institutional settings (e.g., schools, colleges, training centers)<br></br>
                Other (allowing users to specify their unique purpose)
            </p>
            <h2 className='faqsubtitle'>4. Are there any specific styles or designs you prefer?</h2>
            <p className='fa'>1.Modern/Contemporary<br></br>
                2.Minimalist<br></br>
                3.Traditional/Classic<br></br>
                4.Rustic<br></br>
                5.Industrial<br></br>
                6.Scandinavian<br></br>
                7.Mid-century Modern<br></br>
                8.Vintage/Antique<br></br>
                9.Bohemian/Eclectic<br></br>
                10.Coastal/Beachy<br></br>
                11.Art Deco<br></br>
                12.Farmhouse
            </p>
            <h2 className='faqsubtitle'>5. How many pieces of furniture do you require?</h2>
            <p className='fa'>1-5 pieces<br></br>
                6-10 pieces<br></br>
                11-15 pieces<br></br>
                16-20 pieces<br></br>
                More than 20 pieces
            </p>
            <h2 className='faqsubtitle'>6. Do you have any specific dimensions or size requirements?</h2>
            <p className='fa'>1.Small (e.g., compact, space-saving)<br></br>
                2.Medium (e.g., average size)<br></br>
                3.Large (e.g., spacious, oversized)<br></br>
                4.Custom (allowing users to input their specific dimensions)
            </p>
            <h2 className='faqsubtitle'>7. Are there any specific materials or finishes you prefer?</h2>
            <p className='fa'>1.Wood (e.g., oak, pine, mahogany)<br></br>
                2.Metal (e.g., steel, iron, aluminum)<br></br>
                3.Upholstered (e.g., fabric, leather)<br></br>
                4.Synthetic materials (e.g., faux leather, microfiber)<br></br>
                5.Glass<br></br>
                6.Plastic or acrylic<br></br>
                7.Natural fibers (e.g., rattan, wicker)<br></br>
                8.Matte finish<br></br>
                9.Glossy finish<br></br>
                10.Distressed or vintage finish<br></br>
                11.Painted finish (e.g., white, black, specific colors)
            </p>
            <h2 className='faqsubtitle'>8. Are you interested in any additional services, such as delivery and setup?</h2>
            <p className='fa'>Yes, I would like delivery and setup services.<br></br>
                No, I will handle the delivery and setup myself.<br></br>
                I'm not sure, I would like more information about the available services.
            </p>
            <h2 className='faqsubtitle'>9. Are you interested in any additional services, such as delivery and setup?</h2>
            <p className='fa'>Low budget<br></br>
                Moderate budget<br></br>
                High budget<br></br>
                Custom budget (allowing users to input their specific budget)
            </p>
            <h2 className='faqsubtitle'>10. Do you have any specific preferences regarding the rental duration (e.g., weekly, monthly)?</h2>
            <p className='fa'>1.Weekly<br></br>
                2.Monthly<br></br>
                3.Bi-monthly<br></br>
                4.Custom duration (allowing users to input their specific rental duration preference)
            </p>
            <h2 className='faqsubtitle'>11. Are there any specific locations where you require the furniture to be delivered?</h2>
            <p className='fa'>You can provide an input field or a text box where users can enter
                the delivery address or specific location details.<br></br>
                <br></br>
                Alternatively, if your furniture rental service operates in multiple regions 
                    or cities, you can provide a dropdown menu or checkboxes with options
                    for users to select their preferred delivery location.<br></br>
                    <br></br>

                    By obtaining this information, you can ensure accurate delivery planning 
                    and provide users with appropriate delivery options based on their specified
                    locations.
            </p>
            {/* <p className='fa'>Alternatively, if your furniture rental service operates in multiple regions 
                or cities, you can provide a dropdown menu or checkboxes with options
                for users to select their preferred delivery location.
            </p>
            <p className='fa'>By obtaining this information, you can ensure accurate delivery planning 
                and provide users with appropriate delivery options based on their specified
                locations.
            </p> */}
            <h2 className='faqsubtitle'>12. Are there any specific features or functionalities you need in the furniture 
                (e.g., storage compartments, adjustable heights)?</h2>
            <p className='fa'>Storage compartments<br></br>
                Adjustable heights<br></br>
                Reclining functionality<br></br>
                Folding or collapsible design<br></br>
                Swivel or rotating capability<br></br>
                Ergonomic design<br></br>
                Built-in lighting or charging ports<br></br>
                Convertible or multi-purpose use<br></br>
                Modular or customizable configurations<br></br>
                Wheels or mobility for easy movement
            </p>
            <h2 className='faqsubtitle'>13. Do you have any color preferences or restrictions?</h2>
            <p className='fa'>1.Provide a color palette with various options (e.g., neutrals, pastels, bold colors)
                and allow users to select their preferred colors.<br></br>
                <br></br>
                2.Offer specific color choices (e.g., white, black, gray, blue, etc.)
                    as checkboxes or a dropdown menu for users to indicate their preferences.<br></br>
                <br></br>
                3.Provide a text box where users can input any specific color preferences or
                    restrictions they may havet.
            </p>
            <h2 className='faqsubtitle'>14. Are there any specific brands or manufacturers you prefer?</h2>
            <p className='fa'>You can provide an input field or a text box where users can enter the names
                of their preferred brands or manufacturers.<br></br>
                Alternatively, if your furniture rental service offers a range of brands or
                manufacturers, you can provide a dropdown menu or checkboxes with a list
                of available options for users to select from.<br></br>
                By understanding users' brand or manufacturer preferences,
                you can recommend furniture options that align with their preferred choices
                and provide them with a sense of familiarity or trust in the quality and style 
                of the furniture.
            </p>
            <h2 className='faqsubtitle'>14. Are there any specific brands or manufacturers you prefer?</h2>
            <p className='fa'>You can provide an open-text field where users can freely input any specific
                requirements, preferences, or additional information they would like to convey.<br></br>
                <br></br>
                This question allows users to provide any unique or specific details that 
                haven't been covered by previous questions. It gives them an opportunity 
                to express any additional considerations, such as specific materials, finishes, 
                functionality, or any other important factors that are essential to their 
                furniture rental needs.<br></br>
                <br></br>
                By capturing these additional requirements or preferences, 
                you can better understand and cater to the individual needs of each user,
                providing a more personalized and tailored furniture rental experience.
            </p>

            </div>
        </div>
  )
}

export default FAQcontent