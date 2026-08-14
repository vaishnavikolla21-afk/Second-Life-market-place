import { AnalyzedObject, MarketplaceItem, UserProfile } from '../types';

export const INITIAL_USER: UserProfile = {
  name: 'Alex Mercer',
  avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
  bio: 'Passionate about zero-waste living, circular design, and community resource sharing. Repairing & upcycling since 2021.',
  location: 'Portland, OR',
  tier: 'Level 4 Master Recycler',
  memberSince: 'March 2023',
  itemsAnalyzedCount: 142,
  co2SavedKg: 38.5,
  activeListingsCount: 12,
  savedIdeasCount: 27
};

export const PRESET_ANALYZED_OBJECTS: AnalyzedObject[] = [
  {
    id: 'obj-plastic-bottle',
    name: 'Plastic Water Bottle',
    category: 'Plastics & Containers',
    materialComposition: '100% Polyethylene Terephthalate (PET)',
    recyclingCode: 'PET-01',
    conditionRating: 'Clean & Intact ⭐',
    confidence: 99.4,
    features: ['Waterproof', 'Easy to Cut', 'Lightweight', 'Transparent'],
    tags: ['PET-01', 'Food Safe', 'Flexible', 'Recyclable'],
    imageUrl: 'https://images.unsplash.com/photo-1605600659908-0ef719419d41?auto=format&fit=crop&w=800&q=80',
    summary: 'Standard 1L clear PET beverage bottle with cap intact. Structurally sound with minimal creasing, ideal for sub-irrigation planters, modular bird feeders, and drip systems.',
    dateAnalyzed: 'Just now',
    ideas: [
      {
        id: 'idea-bottle-planter',
        title: 'Self-Watering Plant Pot',
        category: 'Gardening & Plants',
        difficulty: 'Easy',
        timeEstimate: '15 mins',
        costEstimate: 'Free',
        carbonSavedKg: 0.85,
        description: 'Convert the two halves of a bottle into an ingenious sub-irrigation planter using capillary action via cotton twine.',
        beforeImg: 'https://images.unsplash.com/photo-1605600659908-0ef719419d41?auto=format&fit=crop&w=600&q=80',
        afterImg: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=800&q=80',
        materials: ['Empty 1L plastic bottle', 'Cotton string or wick', 'Potting soil', 'Herb seedlings or seeds', 'Water'],
        toolsNeeded: ['Utility scissors or craft knife', 'Push pin or small hole punch'],
        steps: [
          {
            stepNumber: 1,
            title: 'Clean and Prepare',
            instruction: 'Remove the label and wash the bottle with warm soapy water. Allow it to air dry completely.',
            tip: 'Soak sticky label residue in warm water with a drop of cooking oil for easy removal.'
          },
          {
            stepNumber: 2,
            title: 'Cut Bottle in Half',
            instruction: 'Carefully cut the plastic bottle horizontally about 10 cm (4 inches) below the top spout using craft scissors.',
            tip: 'Use a wrap-around piece of painter tape as a straight cutting guide.'
          },
          {
            stepNumber: 3,
            title: 'Create Wick & Assemble',
            instruction: 'Poke a small 4mm hole in the bottle cap. Thread a 15cm length of cotton string through, leaving half inside the funnel and half hanging below.',
            tip: 'Cotton yarn or shoelace works best for capillary water transfer.'
          },
          {
            stepNumber: 4,
            title: 'Add Soil, Plant & Water',
            instruction: 'Invert the top funnel into the base. Fill the base with 5cm of water, then fill the funnel with soil and your plant.',
            tip: 'The cotton wick will automatically draw water from the reservoir as the soil dries.'
          }
        ]
      },
      {
        id: 'idea-bird-feeder',
        title: 'Hanging Bird Feeder',
        category: 'Outdoor & Wildlife',
        difficulty: 'Easy',
        timeEstimate: '20 mins',
        costEstimate: '$2 (Seed)',
        carbonSavedKg: 0.65,
        description: 'Transform your bottle into a weather-resistant hanging bird feeder with wooden spoon perches for local songbirds.',
        beforeImg: 'https://images.unsplash.com/photo-1605600659908-0ef719419d41?auto=format&fit=crop&w=600&q=80',
        afterImg: 'https://images.unsplash.com/photo-1549608276-5786777e6587?auto=format&fit=crop&w=800&q=80',
        materials: ['Plastic bottle', '2 Wooden spoons or twigs', 'Jute twine or wire', 'Bird seed blend'],
        toolsNeeded: ['Craft knife', 'Hole punch'],
        steps: [
          {
            stepNumber: 1,
            title: 'Pierce Spoon Holes',
            instruction: 'Cut two matching pairs of holes directly opposite each other on the bottle sides.',
            tip: 'Make the hole on one side slightly larger so seeds can gently spill out onto the spoon bowl.'
          },
          {
            stepNumber: 2,
            title: 'Insert Perches',
            instruction: 'Slide the wooden spoons straight through the holes to form stable perches and feeding trays.',
            tip: 'Angling the spoon slightly downward helps seed flow naturally.'
          },
          {
            stepNumber: 3,
            title: 'Attach Hanging Cord',
            instruction: 'Drill two small holes under the neck collar, loop jute twine through, and tie a secure knot.',
            tip: 'Ensure the knot is balanced so the feeder hangs level.'
          },
          {
            stepNumber: 4,
            title: 'Fill with Seed & Hang',
            instruction: 'Use a funnel to fill the bottle with wild bird seed, screw the cap on tightly, and hang from a tree branch.',
            tip: 'Place at least 5 feet off the ground away from curious pets.'
          }
        ]
      },
      {
        id: 'idea-desk-organizer',
        title: 'Desk Pen & Brush Holder',
        category: 'Home & Office',
        difficulty: 'Easy',
        timeEstimate: '10 mins',
        costEstimate: 'Free',
        carbonSavedKg: 0.45,
        description: 'Smooth-edged minimalist organizer cup for stationary, makeup brushes, or art tools with heat-sealed borders.',
        beforeImg: 'https://images.unsplash.com/photo-1605600659908-0ef719419d41?auto=format&fit=crop&w=600&q=80',
        afterImg: 'https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&w=800&q=80',
        materials: ['Plastic bottle base', 'Iron or hot clothing iron', 'Parchment paper', 'Optional acrylic paint or twine'],
        toolsNeeded: ['Scissors', 'Household iron'],
        steps: [
          {
            stepNumber: 1,
            title: 'Trim to Desired Height',
            instruction: 'Cut the bottom 10cm of the bottle using clean straight strokes.',
            tip: 'Sand any jagged spots lightly.'
          },
          {
            stepNumber: 2,
            title: 'Smooth the Rim',
            instruction: 'Place parchment paper on an iron at medium heat, then press the cut edge against it for 3-5 seconds to curl the plastic smoothly inward.',
            tip: 'This creates a safe, rounded, store-bought edge.'
          },
          {
            stepNumber: 3,
            title: 'Decorate & Organize',
            instruction: 'Wrap with twine, add a minimalist sticker, or leave crystal clear on your desk.',
            tip: 'Group 3 of different heights for a clean stationery set.'
          }
        ]
      },
      {
        id: 'idea-drip-irrigation',
        title: 'Garden Slow-Drip Irrigation Spikes',
        category: 'Gardening & Plants',
        difficulty: 'Easy',
        timeEstimate: '10 mins',
        costEstimate: 'Free',
        carbonSavedKg: 1.2,
        description: 'Deliver targeted root moisture to tomatoes and indoor houseplants during holidays without electricity.',
        beforeImg: 'https://images.unsplash.com/photo-1605600659908-0ef719419d41?auto=format&fit=crop&w=600&q=80',
        afterImg: 'https://images.unsplash.com/photo-1592417817098-8f3d6eb22513?auto=format&fit=crop&w=800&q=80',
        materials: ['Plastic bottle with cap', 'Thumbtack', 'Water'],
        toolsNeeded: ['Thumbtack or heated sewing needle'],
        steps: [
          {
            stepNumber: 1,
            title: 'Perforate the Cap',
            instruction: 'Poke 2 to 3 micro pinholes in the cap using a heated needle or pin.',
            tip: 'Fewer pinholes provide slower, longer-lasting drip rates.'
          },
          {
            stepNumber: 2,
            title: 'Ventilate the Base',
            instruction: 'Cut a tiny 1cm slit or hole in the bottom of the bottle to prevent vacuum lock.',
            tip: 'This allows water to drip smoothly without stopping.'
          },
          {
            stepNumber: 3,
            title: 'Insert Near Plant Roots',
            instruction: 'Fill with water, screw the cap on, and invert into garden soil 2 inches away from plant stem.',
            tip: 'Keeps plants hydrated for 4-7 days unattended.'
          }
        ]
      },
      {
        id: 'idea-ziplock-sealer',
        title: 'Bag Pour Spout & Airtight Clamp',
        category: 'Kitchen Essentials',
        difficulty: 'Easy',
        timeEstimate: '5 mins',
        costEstimate: 'Free',
        carbonSavedKg: 0.35,
        description: 'Repurpose the threaded bottle top into an airtight pour spout for bags of rice, cereal, lentils, or sugar.',
        beforeImg: 'https://images.unsplash.com/photo-1605600659908-0ef719419d41?auto=format&fit=crop&w=600&q=80',
        afterImg: 'https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?auto=format&fit=crop&w=800&q=80',
        materials: ['Threaded neck of plastic bottle', 'Cap', 'Bag of dry goods'],
        toolsNeeded: ['Kitchen shears'],
        steps: [
          {
            stepNumber: 1,
            title: 'Cut Bottle Neck Collar',
            instruction: 'Cut 3cm below the threaded rim to create a small plastic ring and funnel.',
            tip: 'Clean and dry thoroughly.'
          },
          {
            stepNumber: 2,
            title: 'Insert Bag and Fold',
            instruction: 'Push the open plastic or paper bag mouth up through the neck, then fold the edges down over the threads.',
            tip: 'Ensure bag material is flat around the threads.'
          },
          {
            stepNumber: 3,
            title: 'Cap and Pour',
            instruction: 'Screw the original bottle cap over the folded bag to lock airtight freshness and provide a clean pour spout.',
            tip: 'Unscrew whenever you need to dispense ingredients.'
          }
        ]
      }
    ]
  },
  {
    id: 'obj-denim-jeans',
    name: 'Worn Denim Jeans & Fabric Scraps',
    category: 'Textiles & Apparel',
    materialComposition: '98% Cotton Denim, 2% Elastane',
    recyclingCode: 'TEX-05',
    conditionRating: 'Distressed / Sturdy Fabric ⭐',
    confidence: 98.7,
    features: ['High Tensile Strength', 'Classic Indigo Wash', 'Machine Washable', 'Insulative'],
    tags: ['Upcyclable', 'Heavy Cotton', 'Zero Waste', 'High Durability'],
    imageUrl: 'https://images.unsplash.com/photo-1542272604-780c96856592?auto=format&fit=crop&w=800&q=80',
    summary: 'Durable heavyweight cotton denim with natural fade. Excellent tear resistance and thermal barrier properties for pocket organizers, pot holders, and tote bags.',
    dateAnalyzed: '2 hours ago',
    ideas: [
      {
        id: 'idea-denim-tote',
        title: 'Heavy-Duty Farmer’s Market Tote',
        category: 'Bags & Accessories',
        difficulty: 'Medium',
        timeEstimate: '45 mins',
        costEstimate: 'Free',
        carbonSavedKg: 4.2,
        description: 'Construct a stylish, ultra-durable market tote utilizing the jean legs and original pocket structures.',
        beforeImg: 'https://images.unsplash.com/photo-1542272604-780c96856592?auto=format&fit=crop&w=600&q=80',
        afterImg: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80',
        materials: ['Denim jean legs', 'Strong sewing thread', 'Lining fabric (optional)'],
        toolsNeeded: ['Fabric scissors', 'Sewing needle or machine', 'Pins'],
        steps: [
          {
            stepNumber: 1,
            title: 'Cut Jean Legs',
            instruction: 'Cut across both pant legs 14 inches below the waistband.',
            tip: 'Save the back pockets to sew onto the exterior of your tote.'
          },
          {
            stepNumber: 2,
            title: 'Join Panels & Hem Base',
            instruction: 'Turn fabric inside out and sew the bottom seam securely with a double stitch.',
            tip: 'Reinforce corners for heavy groceries.'
          },
          {
            stepNumber: 3,
            title: 'Create Sturdy Handles',
            instruction: 'Cut the inner leg seams into two 20-inch straps and stitch to the upper rim.',
            tip: 'Denim flat-felled seams make great indestructible handles.'
          }
        ]
      },
      {
        id: 'idea-denim-coasters',
        title: 'Braided Indigo Mug Coasters',
        category: 'Home & Living',
        difficulty: 'Easy',
        timeEstimate: '20 mins',
        costEstimate: 'Free',
        carbonSavedKg: 1.1,
        description: 'Rustic circular coasters made from tightly coiled and sewn denim hem strips.',
        beforeImg: 'https://images.unsplash.com/photo-1542272604-780c96856592?auto=format&fit=crop&w=600&q=80',
        afterImg: 'https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=800&q=80',
        materials: ['Denim fabric strips (1 inch wide)', 'Fabric glue or needle & thread'],
        toolsNeeded: ['Scissors', 'Pins'],
        steps: [
          {
            stepNumber: 1,
            title: 'Cut Strips',
            instruction: 'Slice denim into 1-inch strips along the grain.',
            tip: 'Gently pull frayed threads for a stylish boho edge.'
          },
          {
            stepNumber: 2,
            title: 'Coil and Stitch',
            instruction: 'Tightly roll the strip into a flat spiral, tacking with stitches every half turn.',
            tip: 'Alternate light and dark denim layers for contrast.'
          },
          {
            stepNumber: 3,
            title: 'Secure Finish',
            instruction: 'Tuck the end underneath and secure with a lockstitch.',
            tip: 'Absorbs condensation effortlessly while protecting wood tables.'
          }
        ]
      },
      {
        id: 'idea-denim-wall-organizer',
        title: 'Hanging Pocket Wall Organizer',
        category: 'Organization',
        difficulty: 'Easy',
        timeEstimate: '30 mins',
        costEstimate: 'Free',
        carbonSavedKg: 2.3,
        description: 'Mount back pockets onto a backing canvas or wooden dowel for holding keys, glasses, and remotes.',
        beforeImg: 'https://images.unsplash.com/photo-1542272604-780c96856592?auto=format&fit=crop&w=600&q=80',
        afterImg: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80',
        materials: ['3-4 Denim back pockets', 'Wooden dowel or stick', 'Hanging twine'],
        toolsNeeded: ['Fabric shears', 'Sewing kit'],
        steps: [
          {
            stepNumber: 1,
            title: 'Harvest Pockets',
            instruction: 'Carefully cut out back pockets with a 1/2 inch border.',
            tip: 'Keep original rivet studs intact for character.'
          },
          {
            stepNumber: 2,
            title: 'Mount to Backing',
            instruction: 'Stitch pockets in a neat vertical row on a flat denim panel.',
            tip: 'Add label tags for different household members.'
          },
          {
            stepNumber: 3,
            title: 'Hang on Dowel',
            instruction: 'Loop top around wooden dowel and hang on wall.',
            tip: 'Keeps entryways clutter-free.'
          }
        ]
      },
      {
        id: 'idea-denim-pot-holder',
        title: 'Thermal Oven Mitt & Pot Holder',
        category: 'Kitchen Essentials',
        difficulty: 'Medium',
        timeEstimate: '35 mins',
        costEstimate: 'Free',
        carbonSavedKg: 1.8,
        description: 'Multi-layer heat resistant cooking pad using heavy denim layers and cotton batting.',
        beforeImg: 'https://images.unsplash.com/photo-1542272604-780c96856592?auto=format&fit=crop&w=600&q=80',
        afterImg: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80',
        materials: ['Heavy denim squares (8x8 inch)', 'Cotton fleece or old towel core', 'Bias tape'],
        toolsNeeded: ['Sewing machine/needle', 'Pins'],
        steps: [
          {
            stepNumber: 1,
            title: 'Layer Fabrics',
            instruction: 'Sandwich 2 layers of dense cotton towel between 2 denim squares.',
            tip: 'Never use polyester batting as it can melt with high heat.'
          },
          {
            stepNumber: 2,
            title: 'Quilt Grid',
            instruction: 'Sew diagonal grid lines across the square to hold insulation securely.',
            tip: 'A 1.5-inch diamond pattern works great.'
          },
          {
            stepNumber: 3,
            title: 'Bind Edges',
            instruction: 'Fold and stitch edge binding with a small corner loop for hanging.',
            tip: 'Washable and long lasting.'
          }
        ]
      },
      {
        id: 'idea-denim-dog-toy',
        title: 'Braided Tug-of-War Pet Rope',
        category: 'Pet Care',
        difficulty: 'Easy',
        timeEstimate: '15 mins',
        costEstimate: 'Free',
        carbonSavedKg: 1.5,
        description: 'Indestructible woven chew toy for dogs with zero plastic fibers or synthetic dyes.',
        beforeImg: 'https://images.unsplash.com/photo-1542272604-780c96856592?auto=format&fit=crop&w=600&q=80',
        afterImg: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=800&q=80',
        materials: ['Long denim strips', 'No glue or metal'],
        toolsNeeded: ['Heavy scissors'],
        steps: [
          {
            stepNumber: 1,
            title: 'Cut 6 Long Strips',
            instruction: 'Cut 6 strips measuring 3 feet long and 2 inches wide.',
            tip: 'Remove metal rivets.'
          },
          {
            stepNumber: 2,
            title: 'Tie Crown Knot',
            instruction: 'Tie a solid knot at the top, then weave a classic 4-strand square crown braid down the length.',
            tip: 'Pull each knot extremely tight for firmness.'
          },
          {
            stepNumber: 3,
            title: 'Knot the Base',
            instruction: 'Finish with a double overhand knot and fray the tassel ends.',
            tip: 'Machine washable when dirty.'
          }
        ]
      }
    ]
  },
  {
    id: 'obj-brass-lamp',
    name: 'Vintage Brass Table Lamp',
    category: 'Lighting & Decor',
    materialComposition: 'Solid Brass & Cast Iron Base',
    recyclingCode: 'MET-BRASS',
    conditionRating: 'Vintage Patina / Operable ⭐',
    confidence: 97.2,
    features: ['Solid Metal', 'E26 Standard Socket', 'Weighted Base', 'Aged Patina'],
    tags: ['Vintage', 'Mid-Century', 'Restoration Ready', 'High Value'],
    imageUrl: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80',
    summary: 'Mid-century brass gooseneck lamp with authentic patina. Rewiring and pairing with an energy-efficient filament LED or botanical lampshade creates a statement collector piece.',
    dateAnalyzed: '1 day ago',
    ideas: [
      {
        id: 'idea-lamp-rewire',
        title: 'Modern Cloth-Cord Rewiring',
        category: 'Lighting Restoration',
        difficulty: 'Medium',
        timeEstimate: '30 mins',
        costEstimate: '$8',
        carbonSavedKg: 12.4,
        description: 'Upgrade the vintage electrical components with safe braided houndstooth cloth cord and smart warm LED.',
        beforeImg: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=600&q=80',
        afterImg: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=800&q=80',
        materials: ['Braided cloth wire (6ft)', 'Polarized 2-prong plug', 'Vintage LED Edison bulb'],
        toolsNeeded: ['Wire stripper', 'Screwdriver'],
        steps: [
          {
            stepNumber: 1,
            title: 'Disassemble Socket',
            instruction: 'Unscrew the brass cap to access the electrical terminal screws.',
            tip: 'Always ensure lamp is completely unplugged before servicing.'
          },
          {
            stepNumber: 2,
            title: 'Thread Cord & Wire Terminals',
            instruction: 'Feed cloth cord through weighted base and attach neutral wire to silver screw, hot to brass screw.',
            tip: 'Tie an Underwriter’s knot inside the socket for strain relief.'
          },
          {
            stepNumber: 3,
            title: 'Reassemble & Test',
            instruction: 'Snap socket shell back into place, screw in LED bulb, and test.',
            tip: 'Produces a warm, safe architectural glow.'
          }
        ]
      },
      {
        id: 'idea-lamp-planter',
        title: 'Botanical Brass Terrarium Stand',
        category: 'Living Decor',
        difficulty: 'Easy',
        timeEstimate: '20 mins',
        costEstimate: '$5',
        carbonSavedKg: 6.5,
        description: 'Repurpose lamp socket holder to suspend a blown glass air-plant globe or trailing pothos.',
        beforeImg: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=600&q=80',
        afterImg: 'https://images.unsplash.com/photo-1463936575829-25148e1db1b8?auto=format&fit=crop&w=800&q=80',
        materials: ['Glass globe or hanging vase', 'Air plant (Tillandsia) or succulent', 'Twine'],
        toolsNeeded: ['Pliers'],
        steps: [
          {
            stepNumber: 1,
            title: 'Convert Fixture Head',
            instruction: 'Remove electrical socket to reveal the solid brass threaded rod.',
            tip: 'Keep the heavy weighted base for stability.'
          },
          {
            stepNumber: 2,
            title: 'Mount Hanging Terrarium',
            instruction: 'Affix a glass orb or miniature pot to the gooseneck arm.',
            tip: 'Ensure weight is centered over base.'
          },
          {
            stepNumber: 3,
            title: 'Arrange Greenery',
            instruction: 'Add moss, volcanic stones, and an air plant.',
            tip: 'Mist weekly for thriving zero-soil greenery.'
          }
        ]
      },
      {
        id: 'idea-lamp-patina-polish',
        title: 'Mirror Brass Restoration & Seal',
        category: 'Restoration',
        difficulty: 'Easy',
        timeEstimate: '25 mins',
        costEstimate: '$3',
        carbonSavedKg: 8.0,
        description: 'Eco-friendly natural polish using lemon and baking soda to restore stunning golden mirror luster.',
        beforeImg: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=600&q=80',
        afterImg: 'https://images.unsplash.com/photo-1540932239986-30128078f3c5?auto=format&fit=crop&w=800&q=80',
        materials: ['Fresh lemon juice', 'Baking soda or coarse salt', 'Microfiber cloth', 'Beeswax paste'],
        toolsNeeded: ['Soft buffing rag', 'Small bowl'],
        steps: [
          {
            stepNumber: 1,
            title: 'Mix Natural Polish Paste',
            instruction: 'Combine 2 tbsp lemon juice with 1 tbsp baking soda into a gentle foaming paste.',
            tip: 'Non-toxic, safe for indoor use with zero chemical fumes.'
          },
          {
            stepNumber: 2,
            title: 'Buff in Circular Motion',
            instruction: 'Apply with microfiber cloth along the grain until oxidation dissolves.',
            tip: 'Rinse with warm water and dry immediately.'
          },
          {
            stepNumber: 3,
            title: 'Seal with Micro-Wax',
            instruction: 'Apply a dime-sized dab of natural beeswax to protect the golden shine from tarnishing.',
            tip: 'Preserves mirror finish for years.'
          }
        ]
      },
      {
        id: 'idea-lamp-marketplace',
        title: 'List on Circular Marketplace',
        category: 'Reselling & Rehome',
        difficulty: 'Easy',
        timeEstimate: '3 mins',
        costEstimate: 'Free',
        carbonSavedKg: 18.5,
        description: 'High collector demand! List directly on the Second-Life Marketplace with AI-generated specifications.',
        beforeImg: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=600&q=80',
        afterImg: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=800&q=80',
        materials: ['Current photos', 'Item condition notes'],
        toolsNeeded: ['Second-Life App'],
        steps: [
          {
            stepNumber: 1,
            title: 'Auto-fill Listing Specs',
            instruction: 'Click the "List on Marketplace" button to automatically transfer verified metal composition and photos.',
            tip: 'AI suggests optimal local pricing ($45 - $65).'
          },
          {
            stepNumber: 2,
            title: 'Choose Delivery or Pickup',
            instruction: 'Set local porch pickup to eliminate packaging waste and shipping emissions.',
            tip: 'Connect instantly with verified local vintage enthusiasts.'
          }
        ]
      },
      {
        id: 'idea-lamp-bookend',
        title: 'Heavyweight Sculptural Bookend',
        category: 'Interior Design',
        difficulty: 'Easy',
        timeEstimate: '10 mins',
        costEstimate: 'Free',
        carbonSavedKg: 4.5,
        description: 'Utilize the weighted architectural cast base as an industrial bookend for heavy art monographs.',
        beforeImg: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=600&q=80',
        afterImg: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=800&q=80',
        materials: ['Felt pads for base', 'Clean brass body'],
        toolsNeeded: ['Adhesive felt'],
        steps: [
          {
            stepNumber: 1,
            title: 'Apply Protective Felt Base',
            instruction: 'Stick 4 soft felt pads to the underside to safeguard wood bookshelves.',
            tip: 'Prevents scratches on delicate surfaces.'
          },
          {
            stepNumber: 2,
            title: 'Position in Bookshelf',
            instruction: 'Anchor heavy hardcover books with the vintage sculptural brass silhouette.',
            tip: 'Adds warm metallic accents to room decor.'
          }
        ]
      }
    ]
  },
  {
    id: 'obj-glass-jar',
    name: 'Mason Glass Jars (Set)',
    category: 'Glass & Storage',
    materialComposition: '100% Soda-Lime Glass',
    recyclingCode: 'GLA-70',
    conditionRating: 'Pristine / Airtight ⭐',
    confidence: 99.8,
    features: ['Infinitely Recyclable', 'Non-Porous', 'Dishwasher Safe', 'Airtight Seal'],
    tags: ['Zero Waste', 'Kitchen Ready', 'Glassware', 'Fermentation'],
    imageUrl: 'https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?auto=format&fit=crop&w=800&q=80',
    summary: 'Clear 500ml soda-lime glass preserve jars with hermetic clamp lids. Ideal for zero-waste pantry storage, living moss terrariums, and homemade sourdough starters.',
    dateAnalyzed: '3 days ago',
    ideas: [
      {
        id: 'idea-jar-terrarium',
        title: 'Miniature Closed Biosphere Terrarium',
        category: 'Indoor Nature',
        difficulty: 'Easy',
        timeEstimate: '20 mins',
        costEstimate: '$3',
        carbonSavedKg: 1.4,
        description: 'Self-sustaining microscopic rainforest ecosystem that recycles its own moisture in an airtight jar.',
        beforeImg: 'https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?auto=format&fit=crop&w=600&q=80',
        afterImg: 'https://images.unsplash.com/photo-1463936575829-25148e1db1b8?auto=format&fit=crop&w=800&q=80',
        materials: ['Glass jar with airtight lid', 'Gravel & activated charcoal', 'Sheet moss', 'Small fittonia or fern'],
        toolsNeeded: ['Long tweezers/chopsticks', 'Water spray bottle'],
        steps: [
          {
            stepNumber: 1,
            title: 'Drainage & Charcoal Layer',
            instruction: 'Add 1 inch of small pebbles, topped with a thin dusting of activated charcoal to prevent bacterial odor.',
            tip: 'Charcoal keeps water sweet and filtered in a closed environment.'
          },
          {
            stepNumber: 2,
            title: 'Soil & Plants',
            instruction: 'Add 1.5 inches of moisture-retentive potting soil, and gently plant miniature moss and nerve plant cuttings.',
            tip: 'Use chopsticks to position delicate roots precisely.'
          },
          {
            stepNumber: 3,
            title: 'Mist and Seal',
            instruction: 'Mist with 4-5 squirts of filtered water, wipe glass walls, and seal the lid.',
            tip: 'Water evaporates and rains down inside continuously for months.'
          }
        ]
      },
      {
        id: 'idea-jar-candle',
        title: 'Hand-Poured Soy Wax Scented Candle',
        category: 'Aromatherapy',
        difficulty: 'Easy',
        timeEstimate: '25 mins',
        costEstimate: '$4',
        carbonSavedKg: 0.9,
        description: 'Eco-friendly clean burning candle using 100% natural soy wax flakes and cedar essential oil.',
        beforeImg: 'https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?auto=format&fit=crop&w=600&q=80',
        afterImg: 'https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=800&q=80',
        materials: ['Clean glass jar', 'Soy wax flakes (200g)', 'Natural cotton wick with tab', 'Essential oils (Lavender/Pine)'],
        toolsNeeded: ['Heat-safe pitcher or double boiler', 'Wick centering clip/clothespin'],
        steps: [
          {
            stepNumber: 1,
            title: 'Anchor the Wick',
            instruction: 'Dab glue or hot wax to the metal tab and center it firmly at the bottom of the jar.',
            tip: 'Hold the top of the wick upright using a clothespin across the jar rim.'
          },
          {
            stepNumber: 2,
            title: 'Melt Wax & Fragrance',
            instruction: 'Melt soy wax in double boiler to 160°F, stir in 20 drops of essential oil, and cool slightly to 135°F.',
            tip: 'Pouring too hot can create surface sinkholes.'
          },
          {
            stepNumber: 3,
            title: 'Pour and Cure',
            instruction: 'Slowly pour wax into jar, leaving 1/2 inch headspace. Allow to solidify for 24 hours before trimming wick to 1/4 inch.',
            tip: 'Burns clean for up to 40 soothing hours.'
          }
        ]
      },
      {
        id: 'idea-jar-pantry',
        title: 'Zero-Waste Bulk Pantry Display',
        category: 'Kitchen Organization',
        difficulty: 'Easy',
        timeEstimate: '10 mins',
        costEstimate: 'Free',
        carbonSavedKg: 2.1,
        description: 'Eliminate single-use plastic packaging by shopping bulk grains, lentils, and spices in marked jars.',
        beforeImg: 'https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?auto=format&fit=crop&w=600&q=80',
        afterImg: 'https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?auto=format&fit=crop&w=800&q=80',
        materials: ['Glass jars with lids', 'Chalkboard labels or grease pencil'],
        toolsNeeded: ['Label pen'],
        steps: [
          {
            stepNumber: 1,
            title: 'Tare Weight Marking',
            instruction: 'Weigh empty jar and write the tare grams on the base with permanent marker.',
            tip: 'Cashiers at zero-waste co-ops subtract tare weight instantly.'
          },
          {
            stepNumber: 2,
            title: 'Fill with Bulk Staples',
            instruction: 'Refill oats, quinoa, chia seeds, and coffee beans at bulk refill stations.',
            tip: 'Glass keeps food fresh and 100% insect-proof.'
          }
        ]
      },
      {
        id: 'idea-jar-hanging-lanterns',
        title: 'Rustic Wire-Wrapped Garden Lanterns',
        category: 'Outdoor & Patio',
        difficulty: 'Easy',
        timeEstimate: '15 mins',
        costEstimate: '$2',
        carbonSavedKg: 0.8,
        description: 'Suspend fairy lights or solar tealights in wire-wrapped jars along garden fences or trees.',
        beforeImg: 'https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?auto=format&fit=crop&w=600&q=80',
        afterImg: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=800&q=80',
        materials: ['Glass jar', 'Galvanized craft wire', 'Solar LED puck or battery fairy lights'],
        toolsNeeded: ['Pliers', 'Wire cutter'],
        steps: [
          {
            stepNumber: 1,
            title: 'Create Neck Collar',
            instruction: 'Wrap craft wire tightly under jar neck groove and twist secure loop handles.',
            tip: 'Tight wraps prevent slipping when suspended.'
          },
          {
            stepNumber: 2,
            title: 'Insert Light Source',
            instruction: 'Drop in warm white fairy lights or solar lid inserts.',
            tip: 'Creates magical evening ambient illumination.'
          }
        ]
      },
      {
        id: 'idea-jar-fermenter',
        title: 'Artisan Kimchi & Pickle Fermenter',
        category: 'Culinary Craft',
        difficulty: 'Medium',
        timeEstimate: '30 mins',
        costEstimate: '$3',
        carbonSavedKg: 1.9,
        description: 'Master lacto-fermentation of cucumbers, sauerkraut, and chili hot sauces right in the jar.',
        beforeImg: 'https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?auto=format&fit=crop&w=600&q=80',
        afterImg: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80',
        materials: ['Glass jar', 'Fresh cabbage/cucumbers', 'Non-iodized sea salt', 'Spring water'],
        toolsNeeded: ['Clean fermentation weight or cabbage leaf'],
        steps: [
          {
            stepNumber: 1,
            title: 'Submerge Vegetables in Brine',
            instruction: 'Pack salted shredded vegetables tightly under 2.5% saltwater brine.',
            tip: 'Keep all organic material fully submerged below liquid line.'
          },
          {
            stepNumber: 2,
            title: 'Burp Daily',
            instruction: 'Store at 68°F out of direct sunlight and release carbon dioxide gas once daily for 5-7 days.',
            tip: 'Produces rich probiotics and gut-healthy natural acids.'
          }
        ]
      }
    ]
  }
];

export const INITIAL_MARKETPLACE_ITEMS: MarketplaceItem[] = [
  {
    id: 'item-1',
    title: 'Minimalist Electric Kettle',
    price: 25,
    isFree: false,
    category: 'Kitchen',
    condition: 'Great',
    location: 'Portland, OR',
    zipCode: '97201',
    description: 'Stainless steel 1.7L rapid-boil gooseneck electric kettle with temperature control dial. Cleaned, descaled with organic citric acid, fully tested and working flawlessly.',
    photos: [
      'https://images.unsplash.com/photo-1570222094114-d054a817e56b?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=800&q=80'
    ],
    aiVerified: true,
    materials: ['Food Grade 304 Stainless Steel', 'BPA-Free Handle'],
    seller: {
      name: 'Maya Lin',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
      rating: 4.9,
      reviewCount: 42,
      joinedDate: 'Jan 2022',
      location: 'Portland, OR (Hawthorne)',
      badges: ['Eco Champion', 'Top Seller', 'Verified Identity']
    },
    datePosted: '2 hours ago',
    carbonOffsetKg: 14.8,
    views: 128,
    saves: 19
  },
  {
    id: 'item-2',
    title: 'Terracotta Garden Pots (Set of 4)',
    price: 0,
    isFree: true,
    category: 'Garden',
    condition: 'Good',
    location: 'Seattle, WA',
    zipCode: '98101',
    description: 'Authentic breathable Italian clay terracotta planters with drainage saucers. Minor natural moss patina on exterior that gives lovely character, zero cracks.',
    photos: [
      'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1592417817098-8f3d6eb22513?auto=format&fit=crop&w=800&q=80'
    ],
    aiVerified: true,
    materials: ['100% Baked Terracotta Natural Clay'],
    seller: {
      name: 'Julian Vance',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
      rating: 5.0,
      reviewCount: 18,
      joinedDate: 'May 2023',
      location: 'Seattle, WA (Capitol Hill)',
      badges: ['Free Donor', 'Plant Lover']
    },
    datePosted: '5 hours ago',
    carbonOffsetKg: 8.2,
    views: 245,
    saves: 34
  },
  {
    id: 'item-3',
    title: 'Mid-Century Lounge Chair',
    price: 120,
    isFree: false,
    category: 'Furniture',
    condition: 'Good',
    location: 'Austin, TX',
    zipCode: '78701',
    description: 'Solid walnut frame with newly re-upholstered textured sage wool cushion. Ergonomic curved armrests. Sturdy joint joinery with no wobbles.',
    photos: [
      'https://images.unsplash.com/photo-1580481077195-742299dd7686?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=800&q=80'
    ],
    aiVerified: true,
    materials: ['Solid American Walnut', 'High Density Foam', 'Wool Blend'],
    seller: {
      name: 'Elena Rostova',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
      rating: 4.8,
      reviewCount: 31,
      joinedDate: 'Nov 2021',
      location: 'Austin, TX (South Congress)',
      badges: ['Master Restorer', 'Verified Identity']
    },
    datePosted: '1 day ago',
    carbonOffsetKg: 46.5,
    views: 412,
    saves: 58
  },
  {
    id: 'item-4',
    title: 'Mechanical Keyboard (Brown Switches)',
    price: 45,
    isFree: false,
    category: 'Tech',
    condition: 'Like New',
    location: 'Denver, CO',
    zipCode: '80202',
    description: 'Compact 75% mechanical keyboard with tactile brown switches, hot-swappable PCB, PBT double-shot keycaps, and detachable braided USB-C cable. Thoroughly sanitized with sonic cleaner.',
    photos: [
      'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&w=800&q=80'
    ],
    aiVerified: true,
    materials: ['Anodized Aluminum Base Plate', 'PBT Plastic Keycaps'],
    seller: {
      name: 'Marcus Brody',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
      rating: 4.9,
      reviewCount: 15,
      joinedDate: 'Aug 2023',
      location: 'Denver, CO (LoDo)',
      badges: ['Fast Responder', 'Tech Upcycler']
    },
    datePosted: '1 day ago',
    carbonOffsetKg: 12.0,
    views: 189,
    saves: 22
  },
  {
    id: 'item-5',
    title: 'Upcycled Denim Patchwork Jacket (M)',
    price: 55,
    isFree: false,
    category: 'Clothing',
    condition: 'Upcycled',
    location: 'Portland, OR',
    zipCode: '97209',
    description: 'Handmade one-of-a-kind vintage oversized denim trucker jacket composed of 4 reclaimed Levi’s jeans. Reinforced topstitching with brass hardware and corduroy collar.',
    photos: [
      'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1542272604-780c96856592?auto=format&fit=crop&w=800&q=80'
    ],
    aiVerified: true,
    materials: ['100% Recycled Cotton Denim', 'Brass Buttons'],
    seller: {
      name: 'Alex Mercer',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
      rating: 4.9,
      reviewCount: 56,
      joinedDate: 'Mar 2023',
      location: 'Portland, OR (Pearl District)',
      badges: ['Upcycling Pioneer', 'Circular Artisan']
    },
    datePosted: '2 days ago',
    carbonOffsetKg: 28.4,
    views: 520,
    saves: 83
  },
  {
    id: 'item-6',
    title: 'Solid Oak Refurbished Coffee Table',
    price: 65,
    isFree: false,
    category: 'Furniture',
    condition: 'Great',
    location: 'Portland, OR',
    zipCode: '97214',
    description: 'Restored American white oak coffee table sanded to bare wood and finished with food-safe plant-based hardwax oil. Matte natural finish resistant to water rings.',
    photos: [
      'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1532372320572-cda25653a26d?auto=format&fit=crop&w=800&q=80'
    ],
    aiVerified: true,
    materials: ['Solid White Oak', 'Organic Linseed & Carnauba Finish'],
    seller: {
      name: 'Alex Mercer',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
      rating: 4.9,
      reviewCount: 56,
      joinedDate: 'Mar 2023',
      location: 'Portland, OR (Pearl District)',
      badges: ['Upcycling Pioneer', 'Circular Artisan']
    },
    datePosted: '3 days ago',
    carbonOffsetKg: 35.0,
    views: 310,
    saves: 44
  },
  {
    id: 'item-7',
    title: 'Collection of Heirloom Seed Packets (12 Varieties)',
    price: 0,
    isFree: true,
    category: 'Garden',
    condition: 'Like New',
    location: 'Eugene, OR',
    zipCode: '97401',
    description: 'Surplus organic open-pollinated seeds harvested from last season: Rainbow Swiss Chard, Brandywine Tomato, Genovese Basil, Mammoth Sunflower, and French Breakfast Radish.',
    photos: [
      'https://images.unsplash.com/photo-1592417817098-8f3d6eb22513?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=800&q=80'
    ],
    aiVerified: true,
    materials: ['Non-GMO Heirloom Seeds', 'Kraft Paper Envelopes'],
    seller: {
      name: 'Clara Oswald',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
      rating: 5.0,
      reviewCount: 29,
      joinedDate: 'Feb 2023',
      location: 'Eugene, OR',
      badges: ['Community Seed Bank', 'Eco Gardener']
    },
    datePosted: '3 days ago',
    carbonOffsetKg: 4.1,
    views: 198,
    saves: 51
  },
  {
    id: 'item-8',
    title: 'Cast Iron Skillet (10-inch, Seasoned)',
    price: 30,
    isFree: false,
    category: 'Kitchen',
    condition: 'Great',
    location: 'San Francisco, CA',
    zipCode: '94107',
    description: 'Heavy vintage cast iron pan freshly stripped and seasoned with 5 coats of organic flaxseed oil. Non-stick mirror glass surface ready for cooking for another 100 years.',
    photos: [
      'https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?auto=format&fit=crop&w=800&q=80'
    ],
    aiVerified: true,
    materials: ['Virgin Cast Iron'],
    seller: {
      name: 'Samira Patel',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
      rating: 4.9,
      reviewCount: 38,
      joinedDate: 'Oct 2022',
      location: 'San Francisco, CA (Mission)',
      badges: ['Zero Waste Cook']
    },
    datePosted: '4 days ago',
    carbonOffsetKg: 19.2,
    views: 290,
    saves: 37
  }
];
