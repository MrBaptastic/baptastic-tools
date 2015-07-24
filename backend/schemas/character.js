
import { Schema } from "mongoose";

import Injury from "./injury";

export default new Schema({
  name:              { type: String },
  career:            { type: String },
  specTrees:         { type: String }, // ???
  gender:            { type: String },
  age:               { type: Number },
  height:            { type: Number },
  build:             { type: String },
  hair:              { type: String },
  eyes:              { type: String },
  features:          { type: String },
  soakValue:         { type: Number },
  wound: {
    threshold: { type: Number },
    current:   { type: Number },
  }
  strain: {
    threshold: { type: Number },
    current:   { type: Number }
  },
  defense: {
    ranged: { type: Number },
    melee:  { type: Number },
  }
  brawn:             { type: Number     },
  agility:           { type: Number     },
  intellect:         { type: Number     },
  cunning:           { type: Number     },
  willpower:         { type: Number     },
  presense:          { type: Number     },
  credits:           { type: Number     },
  species:           { type: Schema.ObjectId, ref: 'Species'    },
  skills:          [ { type: Schema.ObjectId, ref: 'Skill'      } ],
  weapons:         [ { type: Schema.ObjectId, ref: 'Weapon'     } ],
  motivations:     [ { type: Schema.ObjectId, ref: 'Motivation' } ],
  obligations:     [ { type: Schema.ObjectId, ref: 'Obligation' } ],
  gear:            [ { type: Schema.ObjectId, ref: 'Gear'       } ],
  talents:         [ { type: Schema.ObjectId, ref: 'Talent'     } ],
  injury:          [ Injury ]
});
