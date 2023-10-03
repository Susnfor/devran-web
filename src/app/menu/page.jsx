import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import MenuItem from '../components/MenuItem'

const page = () => {
  return (
    <div>
      <div className='pb-20'>
      <Navbar />
      </div>
      <div className='min-h-screen'>
        <h1 className='text-center text-4xl pb-5'>~Menu~</h1>
        <h2 className='text-center text-2xl pb-5 '>Cold Starters</h2>
        <div className='flex flex-wrap gap-2 justify-center'>
        <MenuItem title="HUMUS"price="£6.00" desc="Pureed chickpeas, tahini, olive oil, lemon juice and garlic."/>
        <MenuItem title="BABAGANOUSH"price="£6.00" desc="Char-grilled aubergine blended with yogurt, tahini, olive oil and lemon juice."/>
        <MenuItem title="TARAMA SALATA"price="£6.00" desc="Freshly prepared whipped cod roe (fish roe paste)."/>
        <MenuItem title="CACIK"price="£6.00" desc="Cucumber, mint, dill and a hint of garlic mixed with yogurt."/>
        <MenuItem title="OLIVES"price="£6.00" desc="Mixed of green & black olives marinated in herbs & olive oil."/>
        <MenuItem title="TABBOULEH"price="£6.00" desc="Finely chopped parsley, spring onio, mixed pepper and dill mixed with soaked bulgur, seasoned with olive oil & pomegranate dressing."/>
        <p>
          ------------------------------------------------------------------
        </p>
        </div>


        <h2 className='text-center text-2xl pb-5'>Hot Starters</h2>
        <div className='flex flex-wrap gap-2 justify-center'>
        <MenuItem title="LAHMACUN"price="£5.00" desc="Very thin Turkish pizza covered with seasoned minced lamb and onion."/>
        <MenuItem title="ALBANIAN LIVER"price="£8.50" desc="Pan fried lamb liver served with onions and parsley"/>
        <MenuItem title="STUFFED AURBERGINE"price="£8.00" desc="Half aubergine stuffed with roasted vegetables and mushrooms and topped with tomato."/>
        <MenuItem title="CREAMY MUSHROOMS"price="£8.00" desc="Sauteed garlic mushrooms in a creamy sauce with cheese and herbs."/>
        <MenuItem title="KING PRAWN"price="£9.00" desc="Pan fried king prawn with chef's special sauce."/>
        <MenuItem title="LAMB MEATBALLS"price="£8.00" desc="Chef's specialty : pan fried meatballs of minced lamb & herbs served with onions and parsley."/>
        <p>
          ------------------------------------------------------------------
        </p>
        </div>

        <h2 className='text-center text-2xl pb-5'>Charcoal Grills</h2>
        <div className='flex flex-wrap gap-2 justify-center'>
        <MenuItem title="LAMB DONER"price="£16.50" desc="House special lamb doner."/>
        <MenuItem title="CHICKEN DONER"price="£15.50" desc="House special chicken doner."/>
        <MenuItem title="MIXED DONER"price="£16.00" desc="House special lamb and chicken doner."/>
        <MenuItem title="LAMB SHISH (Small)"price="£15.00" desc="Char-grilled marinated lamb and cubes on skewer."/>
        <MenuItem title="LAMB SHISH (Large)"price="£20.00" desc="Char-grilled marinated lamb and cubes on skewer."/>
        <MenuItem title="MIX SHISH"price="£19.50" desc="Char-grilled marinated lamb and chicken cubes on skewer."/>
        <MenuItem title="LAMB RIBS"price="£21.00" desc="Char-grilled lamb spare ribs."/>
        <MenuItem title="LAMB BEYTI"price="£19.00" desc="Char-grilled specially prepared minced lamb with finely chopped veg on skewer."/>
        <MenuItem title="GRILLED BABY CHICKEN"price="£18.00" desc="Char-grilled baby chicken."/>
        <MenuItem title="ADANA KOFTE (Small)"price="£15.00" desc="Char-grilled specially prepared minced lamb on skewer."/>
        <MenuItem title="ADANA KOFTE (Large)"price="£16.50" desc="Char-grilled specially prepared minced lamb on skewer."/>
        <MenuItem title="MIXED KEBAB"price="£29.50" desc="Lamb doner, Chicken doner, Adana kofte, Chicken shish and Lamb shish."/>
        <p>
          ------------------------------------------------------------------
        </p>
        </div>

        <h2 className='text-center text-2xl pb-5'>Side Order</h2>
        <div className='flex flex-wrap gap-2 justify-center'>
        <MenuItem title="CHIPS"price="£4.50" />
        <MenuItem title="RICE"price="£4.00" />
        <MenuItem title="MASHED POTATO"price="£4.00" />
        <p>
          ------------------------------------------------------------------
        </p>
        </div>


        <h2 className='text-center text-2xl pb-5'>Drinks</h2>
        <div className='flex flex-wrap gap-2 justify-center'>
        <MenuItem title="COKE"price="£3.50" />
        <MenuItem title="SPRITE"price="£3.50"/>
        <MenuItem title="WATER"price="£2.80" />
        <MenuItem title="CRANBERRY JUICE"price="£3.20" />
        <MenuItem title="ORANGE JUICE"price="£3.20" />
        <MenuItem title="J20"price="£3.50" />
        <p>
          ------------------------------------------------------------------
        </p>
        </div>

      </div>
      <div id="footer">
        <Footer />
        </div>
    </div>
  )
}

export default page