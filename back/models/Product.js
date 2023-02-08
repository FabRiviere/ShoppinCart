const products = [
    {
        "colors": ["White", "Blue", "Black"],
        "_id": "10fc43gt5464asr87try964r4nbg65d4",
        "name": "Canapé BienEtre",
        "price": 2050,
        "imageUrl": "Canape01.jpg",
        "description": "Le canapé à angle droit en tissu Bormio blanc albâtre est un véritable modèle de design. Son tissu bouclette doux et chaleureux s’inscrit dans l’air du temps et lui confère beaucoup d’élégance.",
        "altTxt": "Photo d'un canapé d'angle, deux places"
    },
    {
        "colors": ["Grey", "Green", "Yellow"],
        "_id": "12gd24ff587lmkr45rlk87s5d47ez4g7",
        "name": "Canapé Convert",
        "price": 1850,
        "imageUrl": "Canape02.jpg",
        "description": "Chic et contemporain, le canapé d’angle sera la pièce maitresse de votre salon. Il dispose d’une méridienne et d’une largeur d’assise capable d’accueillir toute la famille.",
        "altTxt": "Photo d'un canapé d'angle, avec de nombreux coussins"
    },
    {
        "colors": ["Grey", "Blue", "Orange"],
        "_id": "25gh88rt64gh78yt25gg99frz21hb5k8",
        "name": "Canapé Carlton",
        "price": 3500,
        "imageUrl": "Canape03.jpg",
        "description": "S’inspirant du mobilier des années 1960 et 1970, le raffinement du canapé Carlton saura donner à votre salon un subtil accent rétro qui ne laissera pas indifférent.",
        "altTxt": "Photo d'un canapé, deux places et demi"
    },
    {
        "colors": ["White", "Black", "Red"],
        "_id": "74fr14gw58dd26re77mq32vbx55gr4h8",
        "name": "Canapé Jacob",
        "price": 1500,
        "imageUrl": "Canape04.jpg",
        "description": "Adepte du moderne ? Laissez-vous séduire par le canapé 3 places en cuir JACOB. Dans un salon qui reprend les codes de la tendance moderne design, il trouvera sa place sans difficulté.",
        "altTxt": "Photo d'un canapé blanc, trois places"
    },
    {
        "colors": ["White", "Pink", "Grey"],
        "_id": "63fd25fh47rq33nv45gt41nhz54mt8k7",
        "name": "Canapé Cosy",
        "price": 1200,
        "imageUrl": "Canape05.jpg",
        "description": "Une suberbe ligne scandinave mêlée à un confort exceptionnel, voilà ce qui caractérise ce modèle aux accents cosy.",
        "altTxt": "Photo d'un canapé gris, trois places"
    },
    {
        "colors": ["Grey", "Navy"],
        "_id": "20rf54sz96hy47tm65px48grh20jp9h5",
        "name": "Canapé Twice",
        "price": 1799,
        "imageUrl": "Canape06.jpg",
        "description": "Le canapé-lit TWICE est un nouveau meuble convertible au mécanisme innovant qui transforme votre canapé en un lit superposé.",
        "altTxt": "Photo d'un canapé convertible en lit, trois places"
    },
    {
        "colors": ["Silver", "Brown", "Yellow", "White"],
        "_id": "82df12tr57ju68ds10vc35jbq54me5g4",
        "name": "Canapé Osvald",
        "price": 2359,
        "imageUrl": "Canape07.jpg",
        "description": "Le canapé convertible Osvald de la marque Innovation a un design très compact. Le dossier et l'assise sont tapissés avec un tissu ou simili cuir de qualité disponible en plusieurs finitions.",
        "altTxt": "Photo d'un canapé convertible en lit ou en sofa"
    },
    {
        "colors": ["Violet", "Gold"],
        "_id": "02jk24ml884ku96sf25jk12bvs63lr2h1",
        "name": "Canapé Fever",
        "price": 2699,
        "imageUrl": "Canape08.jpg",
        "description": "Apportez à votre intérieur une note de sensualité avec ce canapé trois places rétro au dossier incurvé qui rappelle une bouche.",
        "altTxt": "Photo d'un canapé violet, trois places"
    },
]; 

exports.find = () => {
    return new Promise((resolve, reject) => resolve(JSON.parse(JSON.stringify(products))));
}

exports.findById = (id) => {
    return new Promise((resolve, reject) =>
        resolve(JSON.parse(JSON.stringify(products)).find(product =>
            product._id == id)
        )
    );
}