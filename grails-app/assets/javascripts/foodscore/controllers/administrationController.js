//= wrapped

angular
    .module("foodscore")
    .controller("AdministrationController", AdministrationController);

function AdministrationController(Aliment, Famille, Unite, $q) {
    var vm = this;
    var unites;
    var familles;
    var aliments;

    vm.reloadListe = function() {

        // TODO: c'est moche, créer une directive.
        var file = $('#listeFichier')[0].files[0];

        unites = [];
        familles = [];
        aliments = [];

        var unitesSaved = [];
        var famillesSaved = [];

        if(file) {
           // console.log(file);
          //  Aliment.reset({'fichier': file});

            Papa.parse(file, {
                encoding: "UTF-8",
                delimiter: ";",
                step: function (results) {
                    var row = results.data[0];
                    var famille = row[0];//JSON.stringify(row[0]);
                    var nom = row[1];//JSON.stringify(row[1]);
                    var unite = row[2] ? row[2] : 'u';//JSON.stringify(row[2]);
                    var quantite = row[3] ? row[3] : 0;//JSON.stringify(row[3]);
                   // console.log("row3", "*"+row[3]+"*");
                    if(quantite == '?'){
                        quantite = 0;
                    }else{
                        quantite = parseFloat(row[3]) ? parseFloat(row[3]) : 0;
                    }
                    var points = row[4] ? row[4] : 0;//JSON.stringify(row[4]);
                    if(points == '?'){
                        points = 0;
                    }else{
                        points = parseFloat(row[4].replace(',','.'));
                    }

                    if(!_.find(familles, { 'libelle': famille } )){
                        familles.push(new Famille({libelle: famille}));
                    }
                    if(!_.find(unites, { 'libelle': unite } )){
                        unites.push(new Unite({libelle: unite}));
                    }

                    var aliment = new Aliment({libelle: nom, points: points, quantite: quantite, unite: unite, famille: famille})
                    aliments.push(aliment);
                },
                complete: function(){

                    var promises = [];

                    angular.forEach(familles, function (famille) {
                        promises.push(getFamille(famille));
                    });

                    angular.forEach(unites, function (unite) {
                        promises.push(getUnite(unite));
                    });

                    $q.all(promises).then(function(){
                        angular.forEach(aliments, function (aliment) {
                            var f = _.find(famillesSaved, {'libelle' : aliment.famille});
                            var u = _.find(unitesSaved, {'libelle' : aliment.unite});
                            aliment.unite = u;
                            aliment.famille = f;
                            aliment.$save({},function(data){

                            },function(data){
                                console.log("error",data,data.data.errors);
                            });
                        });
                    })

                }
            });
        }

        function getFamille(famille){
            var d = $q.defer();
            famille.$save({}, function(result){
                famillesSaved.push(result);
                d.resolve(result);
            })
            return d.promise;
        }

        function getUnite(unite){
            var d = $q.defer();
            unite.$save({}, function(result){
                unitesSaved.push(result);
                d.resolve(result);
            });
            return d.promise;
        }

    }
}