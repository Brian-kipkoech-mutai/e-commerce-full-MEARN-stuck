
export const createProduct = async (req, res, next) => {
    try {
        const { } = req.body;
        
    } catch (error) {
         next(error)
    }
    
}
{
  _id: new ObjectId('66c4ea347fad963e2dc3d880'),
  priceRange: [ '-50,', '50-100', '100-500', '500-' ],
  ratings: [ 1, 2, 3, 4, 5 ],
  categories: [
    { name: 'Music', id: new ObjectId('66c4cc0223d8812dae69391b') },
    { name: 'Computers', id: new ObjectId('66c4cc0223d8812dae693919') },
    { name: 'Garden', id: new ObjectId('66c4cc0223d8812dae69391a') },
    { name: 'Movies', id: new ObjectId('66c4cc0223d8812dae693918') },
    { name: 'Kids', id: new ObjectId('66c4cc0223d8812dae69391c') }
  ],
  brands: [
    {
      name: 'Thiel - Fay',
      id: new ObjectId('66c4cc0223d8812dae693924')
    },
    { name: 'Ward LLC', id: new ObjectId('66c4cc0223d8812dae693922') },
    {
      name: 'Schuppe LLC',
      id: new ObjectId('66c4cc0223d8812dae693923')
    },
    {
      name: 'McGlynn Group',
      id: new ObjectId('66c4cc0223d8812dae69392a')
    },
    {
      name: 'Little, Marvin and Stiedemann',
      id: new ObjectId('66c4cc0223d8812dae693926')
    },
    {
      name: 'Kemmer - Bauch',
      id: new ObjectId('66c4cc0223d8812dae693929')
    },
    {
      name: 'Cormier, Kuhn and Berge',
      id: new ObjectId('66c4cc0223d8812dae69392b')
    },
    {
      name: 'Ankunding - Turcotte',
      id: new ObjectId('66c4cc0223d8812dae693928')
    },
    {
      name: 'Hyatt, Hahn and Zboncak',
      id: new ObjectId('66c4cc0223d8812dae693927')
    },
    {
      name: 'Renner Inc',
      id: new ObjectId('66c4cc0223d8812dae693925')
    }
  ],
  status: [ 'in-stock', 'out-of-stock', 'preorder' ],
  size: [ 'Small', 'Medium', 'Large', 'X-large' ],
  gender: [ 'Men', 'Women', 'Unisex' ],
  colors: [
    'sky blue', 'lime',       'pink',
    'red',      'grey',       'yellow',
    'white',    'teal',       'purple',
    'olive',    'mint green', 'salmon',
    'ivory',    'lavender',   'turquoise',
    'magenta',  'fuchsia',    'azure',
    'orange',   'orchid',     'green',
    'black',    'silver',     'tan',
    'indigo',   'cyan',       'plum',
    'violet',   'blue',       'maroon',
    'gold'
  ],
  __v: 0
}