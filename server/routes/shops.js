var shops = [
    {id:0 , title:"Alpha Furnitures", Contact:"CHRISTOPHE COENRAETS", time:"9AM - 9PM", Address:"sample address 1", description: "All kind of Furnitures design,manufactures,assembly and repairs . Speacialists in office and living room furnitures.",storeFrontImage:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTZfxvWxTWdkAYJFoONUodv9gwCQq8119K6e2UhEWtT3Ftoczl8eg"},
    {id:1 , title:"Beta Bakers", Contact:"LISA SMITH", time:"10 AM-9 PM", Address:"sample address 2", description: "Specialists in Cup Cakes, have a wide array of choices, Specialists in German and Danish Bakery.",storeFrontImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjRuru2ZB-mL4B2AP8jm1C7DGIfFifNIb95tAGIZYe5KooIkZu"},
    {id:2 , title:"Charlie Automobile Works", Contact:"JOHN SMITH", time:"9AM - 9PM", Address:"sample address 3", description: "All kind of repairs, overhauling and customization work for all kind of Automobile, Speacialists in restoration of vintage cars and bikes",storeFrontImage:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSFWwD86S80VsvwEac9WfVfKCXeOKdj4sEEAMaEbEa-mRWzLo8L"},
    {id:3 , title:"Delta Plumbing Services", Contact:"JESSICA WONG", time:"10AM - 10PM", Address:"sample address 4", description: "Plumbing works for installation and repairs,lawn irrigation and indoor Plumbing Specialists ",storeFrontImage:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTdQpIPpw2VI0h_RhUv2rLxZOXIIs1OX8HxZSpjWLAS2Q56SEHV"},
    {id:4 , title:"Echo Tailors", Contact:"LAURA TAYLOR", time:"9AM - 9PM", Address:"sample address 5", description: "Specialists in wedding gowns and tuxidos.",storeFrontImage:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTYcFIEsftA59cyOSLCci3zW-Y3_flFw3I7q30b6pPU0FRlfa6N"}
];

exports.findAll = function (req, res, next) {
    res.send(shops);
};

exports.findById = function (req, res, next) {
    var id = req.params.id;
    res.send(shops[id]);
};