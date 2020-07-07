
export class Project{

    constructor(
        public _id : String,
        public name : String,
        public description : String,
        public category : String,
        public year : Number,
        public langs : String,
        public image : String
    ){

    }

    setName(name:string){
        this.name = name;
    }
    setDescription(desc:string){
        this.description = desc;
    }
    setCategory(cat:string){
        this.category = cat;
    }
    setYear(year:string){
        this.year = +year;
    }
    setLangs(langs:string){
        this.langs = langs;
    }
    setImage(img:string){
        this.image = img;
    }

}
