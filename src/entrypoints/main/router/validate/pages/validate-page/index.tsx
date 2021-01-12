import React, { memo, FC } from 'react';
import { compose } from 'redux';
import { validateRdf } from '../../../../../../api/validator-api/validator';
import { RdfFile } from '../../../../../../types';
import { RdfVersion } from '../../../../../../types/enums';

import SC from './styled';

interface Props {}

const ValidatePage: FC<Props> = () => <SC.Container>VALIDATE</SC.Container>;

const rdfFile: RdfFile = {
  file: new File(
    [
      `# baseURI: http://www.w3.org/ns/dcat
# imports: http://purl.org/dc/terms/
# imports: http://www.w3.org/2004/02/skos/core
# imports: http://www.w3.org/ns/prov-o#
# prefix: dcat

@prefix dcat: <http://www.w3.org/ns/dcat#> .
@prefix dct: <http://purl.org/dc/terms/> .
@prefix dctype: <http://purl.org/dc/dcmitype/> .
@prefix foaf: <http://xmlns.com/foaf/0.1/> .
@prefix owl: <http://www.w3.org/2002/07/owl#> .
@prefix prov: <http://www.w3.org/ns/prov#> .
@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .
@prefix sdo: <http://schema.org/> .
@prefix skos: <http://www.w3.org/2004/02/skos/core#> .
@prefix vcard: <http://www.w3.org/2006/vcard/ns#> .
@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .

<http://www.w3.org/ns/dcat>
  a owl:Ontology ;
  dct:contributor [
      a foaf:Person ;
      sdo:affiliation [
          foaf:homepage <https://csiro.au> ;
          foaf:name "Commonwealth Scientific and Industrial Research Organisation" ;
        ] ;
      rdfs:seeAlso <https://orcid.org/0000-0002-3884-3420> ;
      foaf:name "Simon J D Cox" ;
      foaf:workInfoHomepage <http://people.csiro.au/Simon-Cox> ;
    ] ;
  dct:contributor [
      sdo:affiliation <http://www.w3.org/data#W3C> ;
      rdfs:seeAlso <http://philarcher.org/foaf.rdf#me> ;
      foaf:homepage <http://www.w3.org/People/all#phila> ;
      foaf:name "Phil Archer" ;
    ] ;
  dct:contributor [
      sdo:affiliation [
          foaf:homepage <http://ec.europa.eu/dgs/informatics/> ;
          foaf:name "European Commission, DG DIGIT" ;
        ] ;
      foaf:name "Vassilios Peristeras" ;
    ] ;
  dct:contributor [
      sdo:affiliation [
          foaf:homepage <http://okfn.org> ;
          foaf:name "Open Knowledge Foundation" ;
        ] ;
      foaf:name "Rufus Pollock" ;
    ] ;
  dct:contributor [
      sdo:affiliation [
          foaf:homepage <http://stfc.ac.uk> ;
          foaf:name "Science and Technology Facilities Council, UK" ;
        ] ;
      rdfs:seeAlso <https://orcid.org/0000-0003-3499-8262> ;
      foaf:homepage <https://agbeltran.github.io> ;
      foaf:name "Alejandra Gonzalez-Beltran" ;
    ] ;
  dct:contributor [
      sdo:affiliation [
          foaf:homepage <http://www.refinitiv.com> ;
          foaf:name "Refinitiv" ;
        ] ;
      foaf:name "David Browning" ;
    ] ;
  dct:contributor [
      rdfs:seeAlso <http://makxdekkers.com/makxdekkers.rdf#me> ;
      foaf:homepage <http://makxdekkers.com/> ;
      foaf:name "Makx Dekkers" ;
    ] ;
  dct:contributor [
      rdfs:seeAlso <http://www.eurecom.fr/~atemezin/gatemezing-foaf.rdf> ;
      foaf:name "Ghislain Auguste Atemezing" ;
    ] ;
  dct:contributor [
      rdfs:seeAlso <https://jakub.klímek.com/#me> ;
      foaf:homepage <https://jakub.klímek.com/> ;
      foaf:name "Jakub Klímek" ;
    ] ;
  dct:contributor [
      rdfs:seeAlso <https://orcid.org/0000-0001-5648-2713> ;
      foaf:homepage <http://www.imati.cnr.it/index.php/people/8-curricula/178-riccardo-albertoni> ;
      foaf:homepage <https://w3id.org/people/ralbertoni/> ;
      foaf:name "Riccardo Albertoni" ;
    ] ;
  dct:contributor [
      rdfs:seeAlso <https://orcid.org/0000-0001-9300-2694> ;
      foaf:homepage <http://www.andrea-perego.name/foaf/#me> ;
      foaf:name "Andrea Perego" ;
    ] ;
  dct:contributor [
      foaf:homepage <http://www.asahi-net.or.jp/~ax2s-kmtn/> ;
      foaf:name "Shuji Kamitsuna" ;
    ] ;
  dct:contributor [
      foaf:name "Boris Villazón-Terrazas" ;
    ] ;
  dct:contributor [
      foaf:name "Marios Meimaris" ;
    ] ;
  dct:contributor [
      foaf:name "Martin Alvarez-Espinar" ;
    ] ;
  dct:contributor [
      foaf:name "Richard Cyganiak" ;
    ] ;
  dct:creator [
      rdfs:seeAlso <http://fadmaa.me/foaf.ttl> ;
      foaf:name "Fadi Maali" ;
    ] ;
  dct:creator [
      foaf:name "John Erickson" ;
    ] ;
  dct:license <https://creativecommons.org/licenses/by/4.0/> ;
  dct:modified "2012-04-24"^^xsd:date ;
  dct:modified "2013-09-20"^^xsd:date ;
  dct:modified "2013-11-28"^^xsd:date ;
  dct:modified "2017-12-19"^^xsd:date ;
  dct:modified "2019" ;
  dct:modified "2020-11-30"^^xsd:date ;
  rdfs:comment "DCAT es un vocabulario RDF diseñado para facilitar la interoperabilidad entre catálogos de datos publicados en la Web. Utilizando DCAT para describir datos disponibles en catálogos se aumenta la posibilidad de que sean descubiertos y se permite que las aplicaciones consuman fácilmente los metadatos de varios catálogos."@es ;
  rdfs:comment "DCAT est un vocabulaire développé pour faciliter l'interopérabilité entre les jeux de données publiées sur le Web. En utilisant DCAT pour décrire les jeux de données dans les catalogues de données, les fournisseurs de données augmentent leur découverte et permettent que les applications facilement les métadonnées de plusieurs catalogues. Il permet en plus la publication décentralisée des catalogues et facilitent la recherche fédérée des données entre plusieurs sites. Les métadonnées DCAT aggrégées peuvent servir comme un manifeste pour faciliter la préservation digitale des ressources. DCAT est définie à l'adresse http://www.w3.org/TR/vocab-dcat/. Une quelconque version de ce document normatif et ce vocabulaire est une erreur dans ce vocabulaire."@fr ;
  rdfs:comment "DCAT is an RDF vocabulary designed to facilitate interoperability between data catalogs published on the Web. By using DCAT to describe datasets in data catalogs, publishers increase discoverability and enable applications easily to consume metadata from multiple catalogs. It further enables decentralized publishing of catalogs and facilitates federated dataset search across sites. Aggregated DCAT metadata can serve as a manifest file to facilitate digital preservation. DCAT is defined at http://www.w3.org/TR/vocab-dcat/. Any variance between that normative document and this schema is an error in this schema."@en ;
  rdfs:comment "DCAT je RDF slovník navržený pro zprostředkování interoperability mezi datovými katalogy publikovanými na Webu. Poskytovatelé dat používáním slovníku DCAT pro popis datových sad v datových katalozích zvyšují jejich dohledatelnost a umožňují aplikacím konzumovat metadata z více katalogů. Dále je umožňena decentralizovaná publikace katalogů a federované dotazování na datové sady napříč katalogy. Agregovaná DCAT metadata mohou také sloužit jako průvodka umožňující digitální uchování informace. DCAT je definován na http://www.w3.org/TR/vocab-dcat/. Jakýkoliv nesoulad mezi odkazovaným dokumentem a tímto schématem je chybou v tomto schématu."@cs ;
  rdfs:comment "DCAT è un vocabolario RDF progettato per facilitare l'interoperabilità tra i cataloghi di dati pubblicati nel Web. Utilizzando DCAT per descrivere i dataset nei cataloghi di dati, i fornitori migliorano la capacità di individuazione dei dati e abilitano le  applicazioni al consumo di dati provenienti da cataloghi differenti. DCAT permette di decentralizzare la pubblicazione di cataloghi e facilita la ricerca federata dei dataset. L'aggregazione dei metadati federati può fungere da file manifesto per facilitare la conservazione digitale. DCAT è definito all'indirizzo http://www.w3.org/TR/vocab-dcat/. Qualsiasi scostamento tra tale definizione normativa e questo schema è da considerarsi un errore di questo schema."@it ;
  rdfs:comment "DCATは、ウェブ上で公開されたデータ・カタログ間の相互運用性の促進を目的とするRDFの語彙です。このドキュメントでは、その利用のために、スキーマを定義し、例を提供します。データ・カタログ内のデータセットを記述するためにDCATを用いると、公開者が、発見可能性を増加させ、アプリケーションが複数のカタログのメタデータを容易に利用できるようになります。さらに、カタログの分散公開を可能にし、複数のサイトにまたがるデータセットの統合検索を促進します。集約されたDCATメタデータは、ディジタル保存を促進するためのマニフェスト・ファイルとして使用できます。"@ja ;
  rdfs:comment "Το DCAT είναι ένα RDF λεξιλόγιο που σχεδιάσθηκε για να κάνει εφικτή τη διαλειτουργικότητα μεταξύ καταλόγων δεδομένων στον Παγκόσμιο Ιστό. Χρησιμοποιώντας το DCAT για την περιγραφή συνόλων δεδομένων, οι εκδότες αυτών αυξάνουν την ανακαλυψιμότητα και επιτρέπουν στις εφαρμογές την εύκολη κατανάλωση μεταδεδομένων από πολλαπλούς καταλόγους. Επιπλέον, δίνει τη δυνατότητα για αποκεντρωμένη έκδοση και διάθεση καταλόγων και επιτρέπει δυνατότητες ενοποιημένης αναζήτησης μεταξύ διαφορετικών πηγών. Συγκεντρωτικά μεταδεδομένα που έχουν περιγραφεί με το DCAT μπορούν να χρησιμοποιηθούν σαν ένα δηλωτικό αρχείο (manifest file) ώστε να διευκολύνουν την ψηφιακή συντήρηση."@el ;
  rdfs:comment "هي أنطولوجية تسهل تبادل البيانات بين مختلف الفهارس على الوب. استخدام هذه الأنطولوجية يساعد على اكتشاف قوائم  البيانات المنشورة على الوب و يمكن التطبيقات المختلفة من الاستفادة أتوماتيكيا من البيانات المتاحة من مختلف الفهارس."@ar ;
  rdfs:comment "DCAT er et RDF-vokabular som har til formål at understøtte interoperabilitet mellem datakataloger udgivet på nettet. Ved at anvende DCAT til at beskrive datasæt i datakataloger, kan udgivere øge findbarhed og gøre det gøre det lettere for applikationer at anvende metadata fra forskellige kataloger. Derudover understøttes decentraliseret udstilling af kataloger og fødererede datasætsøgninger på tværs af websider. Aggregerede DCAT-metadata kan fungere som fortegnelsesfiler der kan understøtte digital bevaring. DCAT er defineret på http://www.w3.org/TR/vocab-dcat/. Enhver forskel mellem det normative dokument og dette schema er en fejl i dette schema."@da ;
  rdfs:label "El vocabulario de catálogo de datos"@es ;
  rdfs:label "Il vocabolario del catalogo dei dati"@it ;
  rdfs:label "Le vocabulaire des jeux de données"@fr ;
  rdfs:label "Slovník pro datové katalogy"@cs ;
  rdfs:label "The data catalog vocabulary"@en ;
  rdfs:label "Το λεξιλόγιο των καταλόγων δεδομένων"@el ;
  rdfs:label "أنطولوجية فهارس قوائم البيانات"@ar ;
  rdfs:label "データ・カタログ語彙（DCAT）"@ja ;
  rdfs:label "Datakatalogvokabular"@da ;
  owl:imports dct: ;
  owl:imports <http://www.w3.org/2004/02/skos/core> ;
  owl:imports <http://www.w3.org/ns/prov-o#> ;
  owl:versionInfo "Esta es una copia del vocabulario DCAT v2.0 disponible en https://www.w3.org/ns/dcat.ttl"@es ;
  owl:versionInfo "This is an updated copy of v2.0 of the DCAT vocabulary, taken from https://www.w3.org/ns/dcat.ttl"@en ;
  owl:versionInfo "Dette er en opdateret kopi af DCAT v. 2.0 som er tilgænglig på https://www.w3.org/ns/dcat.ttl"@da ;
  owl:versionInfo "Questa è una copia aggiornata del vocabolario DCAT v2.0 disponibile in https://www.w3.org/ns/dcat.ttl"@en ;
  owl:versionInfo "Toto je aktualizovaná kopie slovníku DCAT verze 2.0, převzatá z https://www.w3.org/ns/dcat.ttl"@cs ;
  skos:editorialNote "English language definitions updated in this revision in line with ED. Multilingual text unevenly updated."@en ;
  foaf:maker [
      foaf:homepage <http://www.w3.org/2011/gld/> ;
      foaf:name "Government Linked Data WG" ;
    ] ;
.
dcat:Catalog
  a rdfs:Class ;
  a owl:Class ;
  rdfs:comment "A curated collection of metadata about resources (e.g., datasets and data services in the context of a data catalog)."@en ;
  rdfs:comment "Una colección curada de metadatos sobre recursos (por ejemplo, conjuntos de datos y servicios de datos en el contexto de un catálogo de datos)."@es ;
  rdfs:comment "Una raccolta curata di metadati sulle risorse (ad es. sui dataset e relativi servizi nel contesto di cataloghi di dati)."@it ;
  rdfs:comment "Une collection élaborée de métadonnées sur les jeux de données"@fr ;
  rdfs:comment "Řízená kolekce metadat o datových sadách a datových službách"@cs ;
  rdfs:comment "Μια επιμελημένη συλλογή μεταδεδομένων περί συνόλων δεδομένων"@el ;
  rdfs:comment "مجموعة من توصيفات قوائم البيانات"@ar ;
  rdfs:comment "データ・カタログは、データセットに関するキュレートされたメタデータの集合です。"@ja ;
  rdfs:comment "En udvalgt og arrangeret samling af metadata om ressourcer (fx datasæt og datatjenester i kontekst af et datakatalog). "@da ;
  rdfs:isDefinedBy <http://www.w3.org/TR/vocab-dcat/> ;
  rdfs:label "Catalog"@en ;
  rdfs:label "Catalogo"@it ;
  rdfs:label "Catalogue"@fr ;
  rdfs:label "Catálogo"@es ;
  rdfs:label "Katalog"@cs ;
  rdfs:label "Κατάλογος"@el ;
  rdfs:label "فهرس قوائم البيانات"@ar ;
  rdfs:label "カタログ"@ja ;
  rdfs:label "Katalog"@da ;
  rdfs:subClassOf dcat:Dataset ;
  rdfs:subClassOf [
      a owl:Restriction ;
      owl:allValuesFrom dcat:Resource ;
      owl:onProperty dct:hasPart ;
    ] ;
  skos:definition "A curated collection of metadata about resources (e.g., datasets and data services in the context of a data catalog)."@en ;
  skos:definition "Una colección curada de metadatos sobre recursos (por ejemplo, conjuntos de datos y servicios de datos en el contexto de un catálogo de datos)."@es ;
  skos:definition "Una raccolta curata di metadati sulle risorse (ad es. sui dataset e relativi servizi nel contesto di cataloghi di dati)."@it ;
  skos:definition "Une collection élaborée de métadonnées sur les jeux de données."@fr ;
  skos:definition "Řízená kolekce metadat o datových sadách a datových službách."@cs ;
  skos:definition "Μια επιμελημένη συλλογή μεταδεδομένων περί συνόλων δεδομένων."@el ;
  skos:definition "مجموعة من توصيفات قوائم البيانات"@ar ;
  skos:definition "データ・カタログは、データセットに関するキュレートされたメタデータの集合です。"@ja ;
  skos:definition "En samling af metadata om ressourcer (fx datasæt og datatjenester i kontekst af et datakatalog)."@da ;
  skos:editorialNote "English, Italian, Spanish definitions updated in this revision. Multilingual text not yet updated."@en ;
  skos:scopeNote "A web-based data catalog is typically represented as a single instance of this class."@en ;
  skos:scopeNote "Normalmente, un catalogo di dati nel web viene rappresentato come una singola istanza di questa classe."@it ;
  skos:scopeNote "Normalmente, un catálogo de datos disponible en la web se representa como una única instancia de esta clase."@es ;
  skos:scopeNote "Webový datový katalog je typicky reprezentován jako jedna instance této třídy."@cs ;
  skos:scopeNote "Συνήθως, ένας κατάλογος δεδομένων στον Παγκόσμιο Ιστό αναπαρίσταται ως ένα στιγμιότυπο αυτής της κλάσης."@el ;
  skos:scopeNote "通常、ウェブ・ベースのデータ・カタログは、このクラスの1つのインスタンスとして表わされます。"@ja ;
  skos:scopeNote "Et webbaseret datakatalog repræsenteres typisk ved en enkelt instans af denne klasse."@da ;
.
dcat:CatalogRecord
  a rdfs:Class ;
  a owl:Class ;
  rdfs:comment "1つのデータセットを記述したデータ・カタログ内のレコード。"@ja ;
  rdfs:comment "A record in a data catalog, describing the registration of a single dataset or data service."@en ;
  rdfs:comment "Un record in un catalogo di dati che descrive un singolo dataset o servizio di dati."@it ;
  rdfs:comment "Un registre du catalogue ou une entrée du catalogue, décrivant un seul jeu de données."@fr ;
  rdfs:comment "Un registro en un catálogo de datos que describe un solo conjunto de datos o un servicio de datos."@es ;
  rdfs:comment "Záznam v datovém katalogu popisující jednu datovou sadu či datovou službu."@cs ;
  rdfs:comment "Μία καταγραφή ενός καταλόγου, η οποία περιγράφει ένα συγκεκριμένο σύνολο δεδομένων."@el ;
  rdfs:comment "En post i et datakatalog der beskriver registreringen af et enkelt datasæt eller en datatjeneste."@da ;
  rdfs:isDefinedBy <http://www.w3.org/TR/vocab-dcat/> ;
  rdfs:label "Catalog Record"@en ;
  rdfs:label "Katalogizační záznam"@cs ;
  rdfs:label "Record di catalogo"@it ;
  rdfs:label "Registre du catalogue"@fr ;
  rdfs:label "Registro del catálogo"@es ;
  rdfs:label "Καταγραφή καταλόγου"@el ;
  rdfs:label "سجل"@ar ;
  rdfs:label "カタログ・レコード"@ja ;
  rdfs:label "Katalogpost"@da ;
  rdfs:subClassOf [
      a owl:Restriction ;
      owl:allValuesFrom dcat:Resource ;
      owl:onProperty foaf:primaryTopic ;
    ] ;
  rdfs:subClassOf [
      a owl:Restriction ;
      owl:cardinality "1"^^xsd:nonNegativeInteger ;
      owl:onProperty foaf:primaryTopic ;
    ] ;
  skos:definition "1つのデータセットを記述したデータ・カタログ内のレコード。"@ja ;
  skos:definition "A record in a data catalog, describing the registration of a single dataset or data service."@en ;
  skos:definition "Un record in un catalogo di dati che descrive un singolo dataset o servizio di dati."@it ;
  skos:definition "Un registre du catalogue ou une entrée du catalogue, décrivant un seul jeu de données."@fr ;
  skos:definition "Un registro en un catálogo de datos que describe un solo conjunto de datos o un servicio de datos."@es ;
  skos:definition "Záznam v datovém katalogu popisující jednu datovou sadu či datovou službu."@cs ;
  skos:definition "Μία καταγραφή ενός καταλόγου, η οποία περιγράφει ένα συγκεκριμένο σύνολο δεδομένων."@el ;
  skos:definition "En post i et datakatalog der beskriver registreringen af et enkelt datasæt eller en datatjeneste."@da ;
  skos:editorialNote "English definition updated in this revision. Multilingual text not yet updated except the Spanish one and the Czech one and Italian one."@en ;
  skos:scopeNote "C'est une classe facultative et tous les catalogues ne l'utiliseront pas. Cette classe existe pour les catalogues	ayant une distinction entre les métadonnées sur le jeu de données et les métadonnées sur une entrée du jeu de données dans le catalogue."@fr ;
  skos:scopeNote "Esta clase es opcional y no todos los catálogos la utilizarán. Esta clase existe para catálogos que hacen una distinción entre los metadatos acerca de un conjunto de datos o un servicio de datos y los metadatos acerca de una entrada en ese conjunto de datos en el catálogo. Por ejemplo, la propiedad sobre la fecha de la publicación de los datos refleja la fecha en que la información fue originalmente publicada, mientras que la fecha de publicación del registro del catálogo es la fecha en que los datos se agregaron al mismo. En caso en que ambas fechas fueran diferentes, o en que sólo la fecha de publicación del registro del catálogo estuviera disponible, sólo debe especificarse en el registro del catálogo. Tengan en cuenta que la ontología PROV de W3C permite describir otra información sobre la proveniencia de los datos, como por ejemplo detalles del proceso y de los agentes involucrados en algún cambio específico a los datos."@es ;
  skos:scopeNote "Questa classe è opzionale e non tutti i cataloghi la utilizzeranno. Esiste per cataloghi in cui si opera una distinzione tra i metadati relativi al dataset ed i metadati relativi alla gestione del dataset nel catalogo. Ad esempio, la  proprietà per indicare la data di pubblicazione del dataset rifletterà la data in cui l'informazione è stata originariamente messa a disposizione dalla casa editrice, mentre la data di pubblicazione per il record nel catalogo rifletterà la data in cui il dataset è stato aggiunto al catalogo. Nei casi dove solo quest'ultima sia nota, si utilizzerà esclusivamente la data di  pubblicazione relativa al record del catalogo. Si noti che l'Ontologia W3C PROV permette di descrivere ulteriori informazioni sulla provenienza, quali i dettagli del processo, la procedura e l'agente coinvolto in una particolare modifica di un dataset."@it ;
  skos:scopeNote "Tato třída je volitelná a ne všechny katalogy ji využijí. Existuje pro katalogy, ve kterých se rozlišují metadata datové sady či datové služby a metadata o záznamu o datové sadě či datové službě v katalogu. Například datum publikace datové sady odráží datum, kdy byla datová sada původně zveřejněna poskytovatelem dat, zatímco datum publikace katalogizačního záznamu je datum zanesení datové sady do katalogu. V případech kdy se obě data liší, nebo je známo jen to druhé, by mělo být specifikováno jen datum publikace katalogizačního záznamu. Všimněte si, že ontologie W3C PROV umožňuje popsat další informace o původu jako například podrobnosti o procesu konkrétní změny datové sady a jeho účastnících."@cs ;
  skos:scopeNote "This class is optional and not all catalogs will use it. It exists for catalogs where a distinction is made between metadata about a dataset or data service and metadata about the entry for the dataset or data service in the catalog. For example, the publication date property of the dataset reflects the date when the information was originally made available by the publishing agency, while the publication date of the catalog record is the date when the dataset was added to the catalog. In cases where both dates differ, or where only the latter is known, the publication date should only be specified for the catalog record. Notice that the W3C PROV Ontology allows describing further provenance information such as the details of the process and the agent involved in a particular change to a dataset."@en ;
  skos:scopeNote "Αυτή η κλάση είναι προαιρετική και δεν χρησιμοποιείται από όλους τους καταλόγους. Υπάρχει για τις περιπτώσεις καταλόγων όπου γίνεται διαχωρισμός μεταξύ των μεταδεδομένων για το σύνολο των δεδομένων και των μεταδεδομένων για την καταγραφή του συνόλου δεδομένων εντός του καταλόγου. Για παράδειγμα, η ιδιότητα της ημερομηνίας δημοσίευσης του συνόλου δεδομένων δείχνει την ημερομηνία κατά την οποία οι πληροφορίες έγιναν διαθέσιμες από τον φορέα δημοσίευσης, ενώ η ημερομηνία δημοσίευσης της καταγραφής του καταλόγου δείχνει την ημερομηνία που το σύνολο δεδομένων προστέθηκε στον κατάλογο. Σε περιπτώσεις που οι δύο ημερομηνίες διαφέρουν, ή που μόνο η τελευταία είναι γνωστή, η ημερομηνία δημοσίευσης θα πρέπει να δίνεται για την καταγραφή του καταλόγου. Να σημειωθεί πως η οντολογία W3C PROV επιτρέπει την περιγραφή επιπλέον πληροφοριών ιστορικού όπως λεπτομέρειες για τη διαδικασία και τον δράστη που εμπλέκονται σε μία συγκεκριμένη αλλαγή εντός του συνόλου δεδομένων."@el ;
  skos:scopeNote "このクラスはオプションで、すべてのカタログがそれを用いるとは限りません。これは、データセットに関するメタデータとカタログ内のデータセットのエントリーに関するメタデータとで区別が行われるカタログのために存在しています。例えば、データセットの公開日プロパティーは、公開機関が情報を最初に利用可能とした日付を示しますが、カタログ・レコードの公開日は、データセットがカタログに追加された日付です。両方の日付が異っていたり、後者だけが分かっている場合は、カタログ・レコードに対してのみ公開日を指定すべきです。W3CのPROVオントロジー[prov-o]を用いれば、データセットに対する特定の変更に関連するプロセスやエージェントの詳細などの、さらに詳しい来歴情報の記述が可能となることに注意してください。"@ja ;
  skos:scopeNote "Denne klasse er valgfri og ikke alle kataloger vil anvende denne klasse. Den kan anvendes i de kataloger hvor der skelnes mellem metadata om datasættet eller datatjenesten og metadata om selve posten til registreringen af datasættet eller datatjenesten i kataloget. Udgivelsesdatoen for datasættet afspejler for eksempel den dato hvor informationerne oprindeligt blev gjort tilgængelige af udgiveren, hvorimod udgivelsesdatoen for katalogposten er den dato hvor datasættet blev føjet til kataloget. I de tilfælde hvor de to datoer er forskellige eller hvor blot sidstnævnte er kendt, bør udgivelsesdatoen kun angives for katalogposten. Bemærk at W3Cs PROV ontologi gør til muligt at tilføje yderligere proveniensoplysninger eksempelvis om processen eller aktøren involveret i en given ændring af datasættet."@da;
.
dcat:DataService
  a owl:Class ;
  rdfs:comment "A site or end-point providing operations related to the discovery of, access to, or processing functions on, data or related resources."@en ;
  rdfs:comment "Umístění či přístupový bod poskytující operace související s hledáním, přistupem k, či výkonem funkcí na datech či souvisejících zdrojích."@cs ;
  rdfs:comment "Un sitio o end-point que provee operaciones relacionadas a funciones de descubrimiento, acceso, o procesamiento de datos o recursos relacionados."@es ;
  rdfs:comment "Un sito o end-point che fornisce operazioni relative alla scoperta, all'accesso o all'elaborazione di funzioni su dati o risorse correlate."@it ;
  rdfs:comment "Et websted eller endpoint der udstiller operationer relateret til opdagelse af, adgang til eller behandlende funktioner på data eller relaterede ressourcer."@da ;
  rdfs:label "Data service"@en ;
  rdfs:label "Servizio di dati"@it ;
  rdfs:label "Servicio de datos"@es ;
  rdfs:label "Datatjeneste"@da ;
  skos:altLabel "Dataservice"@da ;
  rdfs:subClassOf dctype:Service ;
  rdfs:subClassOf dcat:Resource ;
  rdfs:subClassOf [
      a owl:Restriction ;
      owl:maxCardinality "1"^^xsd:nonNegativeInteger ;
      owl:onProperty dcat:endpointURL ;
    ] ;
  skos:changeNote "New class added in DCAT 2.0."@en ;
  skos:changeNote "Nová třída přidaná ve verzi DCAT 2.0."@cs ;
  skos:changeNote "Nueva clase añadida en DCAT 2.0."@es ;
  skos:changeNote "Nuova classe aggiunta in DCAT 2.0."@it ;
  skos:changeNote "Ny klasse tilføjet i DCAT 2.0."@da ;
  skos:definition "A site or end-point providing operations related to the discovery of, access to, or processing functions on, data or related resources."@en ;
  skos:definition "Umístění či přístupový bod poskytující operace související s hledáním, přistupem k, či výkonem funkcí na datech či souvisejících zdrojích."@cs ;
  skos:definition "Un sitio o end-point que provee operaciones relacionadas a funciones de descubrimiento, acceso, o procesamiento de datos o recursos relacionados."@es ;
  skos:definition "Un sito o end-point che fornisce operazioni relative alla scoperta, all'accesso o all'elaborazione di funzioni su dati o risorse correlate."@it ;
  skos:definition "Et site eller endpoint der udstiller operationer relateret til opdagelse af, adgang til eller behandlende funktioner på data eller relaterede ressourcer."@da ;
  skos:scopeNote "Druh služby může být indikován vlastností dct:type. Její hodnota může být z řízeného slovníku, kterým je například slovník typů prostorových datových služeb INSPIRE."@cs ;
  skos:scopeNote "El tipo de servicio puede indicarse usando la propiedad dct:type. Su valor puede provenir de un vocabulario controlado, como por ejemplo el vocabulario de servicios de datos espaciales de INSPIRE."@es ;
  skos:scopeNote "If a dcat:DataService is bound to one or more specified Datasets, they are indicated by the dcat:servesDataset property."@en ;
  skos:scopeNote "Il tipo di servizio può essere indicato usando la proprietà dct:type. Il suo valore può essere preso da un vocabolario controllato come il vocabolario dei tipi di servizi per dati spaziali di INSPIRE."@it ;
  skos:scopeNote "Pokud je dcat:DataService navázána na jednu či více Datových sad, jsou tyto indikovány vlstností dcat:servesDataset."@cs ;
  skos:scopeNote "Se un dcat:DataService è associato a uno o più Dataset specificati, questi sono indicati dalla proprietà dcat:serveDataset."@it ;
  skos:scopeNote "Si un dcat:DataService está asociado con uno o más conjuntos de datos especificados, dichos conjuntos de datos pueden indicarse con la propiedad dcat:servesDataset."@es ;
  skos:scopeNote "The kind of service can be indicated using the dct:type property. Its value may be taken from a controlled vocabulary such as the INSPIRE spatial data service type vocabulary."@en ;
  skos:scopeNote "Datatjenestetypen kan indikeres ved hjælp af egenskaben dct:type. Værdien kan tages fra kontrollerede udfaldsrum såsom INSPIRE spatial data service vocabulary."@da ;
  skos:scopeNote "Hvis en dcat:DataService er bundet til en eller flere specifikke datasæt kan dette indikeres ved hjælp af egenskaben dcat:servesDataset. "@da ;
.
dcat:Dataset
  a rdfs:Class ;
  a owl:Class ;
  rdfs:comment "1つのエージェントによって公開またはキュレートされ、1つ以上の形式でアクセスまたはダウンロードできるデータの集合。"@ja ;
  rdfs:comment "A collection of data, published or curated by a single source, and available for access or download in one or more representations."@en ;
  rdfs:comment "Kolekce dat poskytovaná či řízená jedním zdrojem, která je k dispozici pro přístup či stažení v jednom či více formátech."@cs ;
  rdfs:comment "Raccolta di dati, pubblicati o curati da un'unica fonte, disponibili per l'accesso o il download in uno o più formati."@it ;
  rdfs:comment "Una colección de datos, publicados o conservados por una única fuente, y disponibles para ser accedidos o descargados en uno o más formatos."@es ;
  rdfs:comment "Une collection de données, publiée ou élaborée par une seule source, et disponible pour accès ou téléchargement dans un ou plusieurs formats."@fr ;
  rdfs:comment "Μία συλλογή από δεδομένα, δημοσιευμένη ή επιμελημένη από μία και μόνο πηγή, διαθέσιμη δε προς πρόσβαση ή μεταφόρτωση σε μία ή περισσότερες μορφές."@el ;
  rdfs:comment "قائمة بيانات منشورة أو مجموعة من قبل مصدر ما و متاح الوصول إليها أو تحميلها"@ar ;
  rdfs:comment "En samling af data, udgivet eller udvalgt og arrangeret af en enkelt kilde og som er til råde for adgang til eller download af i en eller flere repræsentationer."@da ;
  rdfs:isDefinedBy <http://www.w3.org/TR/vocab-dcat/> ;
  rdfs:label "Conjunto de datos"@es ;
  rdfs:label "Dataset"@en ;
  rdfs:label "Dataset"@it ;
  rdfs:label "Datová sada"@cs ;
  rdfs:label "Jeu de données"@fr ;
  rdfs:label "Σύνολο Δεδομένων"@el ;
  rdfs:label "قائمة بيانات"@ar ;
  rdfs:label "データセット"@ja ;
  rdfs:label "Datasæt"@da ;
  skos:altLabel "Datasamling"@da ;
  rdfs:subClassOf dcat:Resource ;
  skos:editorialNote "2020-03-16 A new scopenote added and need to be translated"@en ;
  skos:changeNote "2018-02 - odstraněno tvrzení o podtřídě dctype:Dataset, jelikož rozsah dcat:Dataset zahrnuje několik dalších typů ze slovníku dctype."@cs ;
  skos:changeNote "2018-02 - se eliminó el axioma de subclase con dctype:Dataset porque el alcance de dcat:Dataset incluye muchos otros tipos del vocabulario dctype."@es ;
  skos:changeNote "2018-02 - subclass of dctype:Dataset removed because scope of dcat:Dataset includes several other types from the dctype vocabulary."@en ;
  skos:changeNote "2018-02 - sottoclasse di dctype:Dataset rimosso perché l'ambito di dcat:Dataset include diversi altri tipi dal vocabolario dctype."@it ;
  skos:changeNote "2018-02 - subklasse af dctype:Dataset fjernet da scope af dcat:Dataset omfatter flere forskellige typer fra dctype-vokabularet."@da ;
  skos:definition "1つのエージェントによって公開またはキュレートされ、1つ以上の形式でアクセスまたはダウンロードできるデータの集合。"@ja ;
  skos:definition "A collection of data, published or curated by a single source, and available for access or download in one or more represenations."@en ;
  skos:definition "Kolekce dat poskytovaná či řízená jedním zdrojem, která je k dispozici pro přístup či stažení v jednom či více formátech."@cs ;
  skos:definition "Raccolta di dati, pubblicati o curati da un'unica fonte, disponibili per l'accesso o il download in uno o più formati."@it ;
  skos:definition "Una colección de datos, publicados o conservados por una única fuente, y disponibles para ser accedidos o descargados en uno o más formatos."@es ;
  skos:definition "Une collection de données, publiée ou élaborée par une seule source, et disponible pour accès ou téléchargement dans un ou plusieurs formats."@fr ;
  skos:definition "Μία συλλογή από δεδομένα, δημοσιευμένη ή επιμελημένη από μία και μόνο πηγή, διαθέσιμη δε προς πρόσβαση ή μεταφόρτωση σε μία ή περισσότερες μορφές."@el ;
  skos:definition "قائمة بيانات منشورة أو مجموعة من قبل مصدر ما و متاح الوصول إليها أو تحميلها"@ar ;
  skos:definition "En samling a data, udgivet eller udvalgt og arrangeret af en enkelt kilde og som der er adgang til i en eller flere repræsentationer."@da ;
  skos:scopeNote "Cette classe représente le jeu de données publié par le fournisseur de données. Dans les cas où une distinction est nécessaire entre le jeu de donénes et son entrée dans le catalogue, la classe registre de données peut être utilisée pour ce dernier."@fr ;
  skos:scopeNote "Esta clase representa el conjunto de datos publicados. En los casos donde es necesario distinguir entre el conjunto de datos y su entrada en el catálogo de datos, se debe utilizar la clase 'registro del catálogo'."@es ;
  skos:scopeNote "Questa classe rappresenta il dataset come pubblicato dall’editore. Nel caso in cui sia necessario operare  una distinzione fra i metadati originali del dataset e il record dei metadati ad esso associato nel catalogo (ad esempio, per distinguere la data di modifica del dataset da quella del dataset nel catalogo) si può impiegare la classe catalog record."@it ;
  skos:scopeNote "This class describes the conceptual dataset. One or more representations might be available, with differing schematic layouts and formats or serializations."@en ;
  skos:scopeNote "Questa classe descrive il dataset dal punto di vista concettuale. Possono essere disponibili una o più rappresentazioni, con diversi layout e formati schematici o serializzazioni."@it ;
  skos:scopeNote "This class represents the actual dataset as published by the dataset provider. In cases where a distinction between the actual dataset and its entry in the catalog is necessary (because metadata such as modification date and maintainer might differ), the catalog record class can be used for the latter."@en ;
  skos:scopeNote "Η κλάση αυτή αναπαριστά το σύνολο δεδομένων αυτό καθ'εαυτό, όπως έχει δημοσιευθεί από τον εκδότη. Σε περιπτώσεις όπου είναι απαραίτητος ο διαχωρισμός μεταξύ του συνόλου δεδομένων και της καταγραφής αυτού στον κατάλογο (γιατί μεταδεδομένα όπως η ημερομηνία αλλαγής και ο συντηρητής μπορεί να διαφέρουν) η κλάση της καταγραφής καταλόγου μπορεί να χρησιμοποιηθεί για το τελευταίο."@el ;
  skos:scopeNote "このクラスは、データセットの公開者が公開する実際のデータセットを表わします。カタログ内の実際のデータセットとそのエントリーとの区別が必要な場合（修正日と維持者などのメタデータが異なるかもしれないので）は、後者にcatalog recordというクラスを使用できます。"@ja ;
  skos:scopeNote "The notion of dataset in DCAT is broad and inclusive, with the intention of accommodating resource types arising from all communities. Data comes in many forms including numbers, text, pixels, imagery, sound and other multi-media, and potentially other types, any of which might be collected into a dataset."@en ;
  skos:scopeNote "Denne klasse repræsenterer det konkrete datasæt som det udgives af datasætleverandøren. I de tilfælde hvor det er nødvendigt at skelne mellem det konkrete datasæt og dets registrering i kataloget (fordi metadata såsom ændringsdato og vedligeholder er forskellige), så kan klassen katalogpost anvendes. "@da ;
  skos:scopeNote "Denne klasse beskriver det konceptuelle datasæt. En eller flere repræsentationer kan være tilgængelige med forskellige skematiske opsætninger, formater eller serialiseringer."@da ;
.
dcat:Distribution
  a rdfs:Class ;
  a owl:Class ;
  rdfs:comment "A specific representation of a dataset. A dataset might be available in multiple serializations that may differ in various ways, including natural language, media-type or format, schematic organization, temporal and spatial resolution, level of detail or profiles (which might specify any or all of the above)."@en ;
  rdfs:comment "Konkrétní reprezentace datové sady. Datová sada může být dostupná v různých serializacích, které se mohou navzájem lišit různými způsoby, mimo jiné přirozeným jazykem, media-typem či formátem, schematickou organizací, časovým a prostorovým rozlišením, úrovní detailu či profily (které mohou specifikovat některé či všechny tyto rozdíly)."@cs ;
  rdfs:comment "Rappresenta una forma disponibile e specifica del dataset. Ciascun dataset può essere disponibile in forme differenti, che possono rappresentare formati diversi o diversi punti di accesso per un dataset. Esempi di distribuzioni sono un file CSV scaricabile, una API o un RSS feed."@it ;
  rdfs:comment "Représente une forme spécifique d'un jeu de données. Caque jeu de données peut être disponible sous différentes formes, celles-ci pouvant représenter différents formats du jeu de données ou différents endpoint. Des exemples de distribution sont des fichirs CSV, des API ou des flux RSS."@fr ;
  rdfs:comment "Una representación específica de los datos. Cada conjunto de datos puede estar disponible en formas diferentes, las cuáles pueden variar en distintas formas, incluyendo el idioma, 'media-type' o formato, organización esquemática, resolución temporal y espacial, nivel de detalle o perfiles (que pueden especificar cualquiera o todas las diferencias anteriores)."@es ;
  rdfs:comment "Αναπαριστά μία συγκεκριμένη διαθέσιμη μορφή ενός συνόλου δεδομένων. Κάθε σύνολο δεδομενων μπορεί να είναι διαθέσιμο σε διαφορετικές μορφές, οι μορφές αυτές μπορεί να αναπαριστούν διαφορετικές μορφές αρχείων ή διαφορετικά σημεία διάθεσης. Παραδείγματα διανομών συμπεριλαμβάνουν ένα μεταφορτώσιμο αρχείο μορφής CSV, ένα API ή ένα RSS feed."@el ;
  rdfs:comment "شكل محدد لقائمة البيانات يمكن الوصول إليه. قائمة بيانات ما يمكن أن تكون متاحه باشكال و أنواع متعددة.  ملف يمكن تحميله أو واجهة برمجية يمكن من خلالها الوصول إلى البيانات هي أمثلة على ذلك."@ar ;
  rdfs:comment "データセットの特定の利用可能な形式を表わします。各データセットは、異なる形式で利用できることがあり、これらの形式は、データセットの異なる形式や、異なるエンドポイントを表わす可能性があります。配信の例には、ダウンロード可能なCSVファイル、API、RSSフィードが含まれます。"@ja ;
  rdfs:comment "En specifik repræsentation af et datasæt. Et datasæt kan være tilgængelig i mange serialiseringer der kan variere på forskellige vis, herunder sprog, medietype eller format, systemorganisering, tidslig- og geografisk opløsning, detaljeringsniveau eller profiler (der kan specificere en eller flere af ovenstående)."@da ;
  rdfs:isDefinedBy <http://www.w3.org/TR/vocab-dcat/> ;
  rdfs:label "Distribuce"@cs ;
  rdfs:label "Distribución"@es ;
  rdfs:label "Distribution"@en ;
  rdfs:label "Distribution"@fr ;
  rdfs:label "Distribuzione"@it ;
  rdfs:label "Διανομή"@el ;
  rdfs:label "التوزيع"@ar ;
  rdfs:label "配信"@ja ;
  rdfs:label "Distribution"@da ;
  skos:altLabel "Datadistribution"@da ;
  skos:altLabel "Datarepræsentation"@da ;
  skos:altLabel "Datamanifestation"@da ;
  skos:altLabel "Dataudstilling"@da ;
  skos:definition "A specific representation of a dataset. A dataset might be available in multiple serializations that may differ in various ways, including natural language, media-type or format, schematic organization, temporal and spatial resolution, level of detail or profiles (which might specify any or all of the above)."@en ;
  skos:definition "Konkrétní reprezentace datové sady. Datová sada může být dostupná v různých serializacích, které se mohou navzájem lišit různými způsoby, mimo jiné přirozeným jazykem, media-typem či formátem, schematickou organizací, časovým a prostorovým rozlišením, úrovní detailu či profily (které mohou specifikovat některé či všechny tyto rozdíly)."@cs ;
  skos:definition "Rappresenta una forma disponibile e specifica del dataset. Ciascun dataset può essere disponibile in forme differenti, che possono rappresentare formati diversi o diversi punti di accesso per un dataset. Esempi di distribuzioni sono un file CSV scaricabile, una API o un RSS feed."@it ;
  skos:definition "Représente une forme spécifique d'un jeu de données. Caque jeu de données peut être disponible sous différentes formes, celles-ci pouvant représenter différents formats du jeu de données ou différents endpoint. Des exemples de distribution sont des fichirs CSV, des API ou des flux RSS."@fr ;
  skos:definition "Una representación específica de los datos. Cada conjunto de datos puede estar disponible en formas diferentes, las cuáles pueden variar en distintas formas, incluyendo el idioma, 'media-type' o formato, organización esquemática, resolución temporal y espacial, nivel de detalle o perfiles (que pueden especificar cualquiera o todas las diferencias anteriores)."@es ;
  skos:definition "Αναπαριστά μία συγκεκριμένη διαθέσιμη μορφή ενός συνόλου δεδομένων. Κάθε σύνολο δεδομενων μπορεί να είναι διαθέσιμο σε διαφορετικές μορφές, οι μορφές αυτές μπορεί να αναπαριστούν διαφορετικές μορφές αρχείων ή διαφορετικά σημεία διάθεσης. Παραδείγματα διανομών συμπεριλαμβάνουν ένα μεταφορτώσιμο αρχείο μορφής CSV, ένα API ή ένα RSS feed."@el ;
  skos:definition "شكل محدد لقائمة البيانات يمكن الوصول إليه. قائمة بيانات ما يمكن أن تكون متاحه باشكال و أنواع متعددة.  ملف يمكن تحميله أو واجهة برمجية يمكن من خلالها الوصول إلى البيانات هي أمثلة على ذلك."@ar ;
  skos:definition "データセットの特定の利用可能な形式を表わします。各データセットは、異なる形式で利用できることがあり、これらの形式は、データセットの異なる形式や、異なるエンドポイントを表わす可能性があります。配信の例には、ダウンロード可能なCSVファイル、API、RSSフィードが含まれます。"@ja ;
  skos:definition "En specifik repræsentation af et datasæt. Et datasæt kan være tilgængelig i mange serialiseringer der kan variere på forskellige vis, herunder sprog, medietype eller format, systemorganisering, tidslig- og geografisk opløsning, detaljeringsniveau eller profiler (der kan specificere en eller flere af ovenstående)."@da ;
  skos:scopeNote "Ceci représente une disponibilité générale du jeu de données, et implique qu'il n'existe pas d'information sur la méthode d'accès réelle des données, par exple, si c'est un lien de téléchargement direct ou à travers une page Web."@fr ;
  skos:scopeNote "Esta clase representa una disponibilidad general de un conjunto de datos, e implica que no existe información acerca del método de acceso real a los datos, i.e., si es un enlace de descarga directa o a través de una página Web."@es ;
  skos:scopeNote "Questa classe rappresenta una disponibilità generale di un dataset e non implica alcuna informazione sul metodo di accesso effettivo ai dati, ad esempio se si tratta di un accesso a download diretto, API, o attraverso una pagina Web. L'utilizzo della proprietà dcat:downloadURL indica distribuzioni direttamente scaricabili."@it ;
  skos:scopeNote "This represents a general availability of a dataset it implies no information about the actual access method of the data, i.e. whether by direct download, API, or through a Web page. The use of dcat:downloadURL property indicates directly downloadable distributions."@en ;
  skos:scopeNote "Toto popisuje obecnou dostupnost datové sady. Neimplikuje žádnou informaci o skutečné metodě přístupu k datům, tj. zda jsou přímo ke stažení, skrze API či přes webovou stránku. Použití vlastnosti dcat:downloadURL indikuje přímo stažitelné distribuce."@cs ;
  skos:scopeNote "Αυτό αναπαριστά μία γενική διαθεσιμότητα ενός συνόλου δεδομένων και δεν υπονοεί τίποτα περί του πραγματικού τρόπου πρόσβασης στα δεδομένα, αν είναι άμεσα μεταφορτώσιμα, μέσω API ή μέσω μίας ιστοσελίδας. Η χρήση της ιδιότητας dcat:downloadURL δείχνει μόνο άμεσα μεταφορτώσιμες διανομές."@el ;
  skos:scopeNote "これは、データセットの一般的な利用可能性を表わし、データの実際のアクセス方式に関する情報（つまり、直接ダウンロードなのか、APIなのか、ウェブページを介したものなのか）を意味しません。dcat:downloadURLプロパティーの使用は、直接ダウンロード可能な配信を意味します。"@ja ;
  skos:scopeNote "Denne klasse repræsenterer datasættets overordnede tilgængelighed og giver ikke oplysninger om hvilken metode der kan anvendes til at få adgang til data, dvs. om adgang til datasættet realiseres ved direkte download, API eller via et websted. Anvendelsen af egenskaben dcat:downloadURL indikerer at distributionen kan downloades direkte."@da ;
.
dcat:Relationship
  a owl:Class ;
  rdfs:comment "An association class for attaching additional information to a relationship between DCAT Resources."@en ;
  rdfs:comment "Asociační třída pro připojení dodatečných informací ke vztahu mezi zdroji DCAT."@cs ;
  rdfs:comment "Una clase de asociación para adjuntar información adicional a una relación entre recursos DCAT."@es ;
  rdfs:comment "Una classe di associazione per il collegamento di informazioni aggiuntive a una relazione tra le risorse DCAT."@it ;
  rdfs:comment "En associationsklasse til brug for tilknytning af yderligere information til en relation mellem DCAT-ressourcer."@da ;
  rdfs:label "Relación"@es ;
  rdfs:label "Relationship"@en ;
  rdfs:label "Relazione"@it ;
  rdfs:label "Vztah"@cs ;
  rdfs:label "Relation"@da ;
  rdfs:subClassOf [
      a owl:Restriction ;
      owl:minCardinality "1"^^xsd:nonNegativeInteger ;
      owl:onProperty dct:relation ;
    ] ;
  skos:changeNote "New class added in DCAT 2.0."@en ;
  skos:changeNote "Nová třída přidaná ve verzi DCAT 2.0."@cs ;
  skos:changeNote "Nueva clase añadida en DCAT 2.0."@es ;
  skos:changeNote "Nuova classe aggiunta in DCAT 2.0."@it ;
  skos:changeNote "Ny klasse i DCAT 2.0."@da ;
  skos:definition "An association class for attaching additional information to a relationship between DCAT Resources."@en ;
  skos:definition "Asociační třída pro připojení dodatečných informací ke vztahu mezi zdroji DCAT."@cs ;
  skos:definition "Una clase de asociación para adjuntar información adicional a una relación entre recursos DCAT."@es ;
  skos:definition "Una classe di associazione per il collegamento di informazioni aggiuntive a una relazione tra le risorse DCAT."@it ;
  skos:definition "En associationsklasse til brug for tilknytning af yderligere information til en relation mellem DCAT-ressourcer."@da ;
  skos:scopeNote "Používá se pro charakterizaci vztahu mezi datovými sadami a případně i jinými zdroji, kde druh vztahu je sice znám, ale není přiměřeně charakterizován standardními vlastnostmi slovníku Dublin Core (dct:hasPart, dct:isPartOf, dct:conformsTo, dct:isFormatOf, dct:hasFormat, dct:isVersionOf, dct:hasVersion, dct:replaces, dct:isReplacedBy, dct:references, dct:isReferencedBy, dct:requires, dct:isRequiredBy) či vlastnostmi slovníku PROV-O (prov:wasDerivedFrom, prov:wasInfluencedBy, prov:wasQuotedFrom, prov:wasRevisionOf, prov:hadPrimarySource, prov:alternateOf, prov:specializationOf)."@cs ;
  skos:scopeNote "Se usa para caracterizar la relación entre conjuntos de datos, y potencialmente otros recursos, donde la naturaleza de la relación se conoce pero no está caracterizada adecuadamente con propiedades del estándar 'Dublin Core' (dct:hasPart, dct:isPartOf, dct:conformsTo, dct:isFormatOf, dct:hasFormat, dct:isVersionOf, dct:hasVersion, dct:replaces, dct:isReplacedBy, dct:references, dct:isReferencedBy, dct:requires, dct:isRequiredBy) or PROV-O properties (prov:wasDerivedFrom, prov:wasInfluencedBy, prov:wasQuotedFrom, prov:wasRevisionOf, prov:hadPrimarySource, prov:alternateOf, prov:specializationOf)."@es ;
  skos:scopeNote "Use to characterize a relationship between datasets, and potentially other resources, where the nature of the relationship is known but is not adequately characterized by the standard Dublin Core properties (dct:hasPart, dct:isPartOf, dct:conformsTo, dct:isFormatOf, dct:hasFormat, dct:isVersionOf, dct:hasVersion, dct:replaces, dct:isReplacedBy, dct:references, dct:isReferencedBy, dct:requires, dct:isRequiredBy) or PROV-O properties (prov:wasDerivedFrom, prov:wasInfluencedBy, prov:wasQuotedFrom, prov:wasRevisionOf, prov:hadPrimarySource, prov:alternateOf, prov:specializationOf)."@en ;
  skos:scopeNote "Viene utilizzato per caratterizzare la relazione tra insiemi di dati, e potenzialmente altri tipi di risorse, nei casi in cui la natura della relazione è nota ma non adeguatamente caratterizzata dalle proprietà dello standard 'Dublin Core' (dct:hasPart, dct:isPartOf, dct:conformsTo, dct:isFormatOf, dct:hasFormat, dct:isVersionOf, dct:hasVersion, dct:replaces, dct:isReplacedBy, dct:references, dct:isReferencedBy, dct:require, dct:isRequiredBy) o dalle propietà fornite da PROV-O  (prov:wasDerivedFrom, prov:wasInfluencedBy, prov:wasQuotedFrom, prov:wasRevisionOf, prov: hadPrimarySource, prov:alternateOf, prov:specializationOf)."@it ;
  skos:scopeNote "Anvendes til at karakterisere en relation mellem datasæt, og potentielt andre ressourcer, hvor relationen er kendt men ikke tilstrækkeligt beskrevet af de standardiserede egenskaber i Dublin Core (dct:hasPart, dct:isPartOf, dct:conformsTo, dct:isFormatOf, dct:hasFormat, dct:isVersionOf, dct:hasVersion, dct:replaces, dct:isReplacedBy, dct:references, dct:isReferencedBy, dct:requires, dct:isRequiredBy) eller PROV-O-egenskaber (prov:wasDerivedFrom, prov:wasInfluencedBy, prov:wasQuotedFrom, prov:wasRevisionOf, prov:hadPrimarySource, prov:alternateOf, prov:specializationOf)."@da ;
.
dcat:Resource
  a owl:Class ;
  rdfs:comment "Recurso publicado o curado por un agente único."@es ;
  rdfs:comment "Resource published or curated by a single agent."@en ;
  rdfs:comment "Risorsa pubblicata o curata da un singolo agente."@it ;
  rdfs:comment "Zdroj publikovaný či řízený jediným činitelem."@cs ;
  rdfs:comment "Ressource udgivet eller udvalgt og arrangeret af en enkelt aktør."@da ;
  rdfs:label "Catalogued resource"@en ;
  rdfs:label "Katalogizovaný zdroj"@cs ;
  rdfs:label "Recurso catalogado"@es ;
  rdfs:label "Risorsa catalogata"@it ;
  rdfs:label "Katalogiseret ressource"@da ;
  skos:changeNote "New class added in DCAT 2.0."@en ;
  skos:changeNote "Nová třída přidaná ve verzi DCAT 2.0."@cs ;
  skos:changeNote "Nueva clase agregada en DCAT 2.0."@es ;
  skos:changeNote "Nuova classe aggiunta in DCAT 2.0."@it ;
  skos:changeNote "Ny klasse i DCAT 2.0."@da ;
  skos:definition "Recurso publicado o curado por un agente único."@es ;
  skos:definition "Resource published or curated by a single agent."@en ;
  skos:definition "Risorsa pubblicata o curata da un singolo agente."@it ;
  skos:definition "Zdroj publikovaný či řízený jediným činitelem."@cs ;
  skos:definition "Ressource udgivet eller udvalgt og arrangeret af en enkelt aktør."@da ;
  skos:scopeNote "La clase de todos los recursos catalogados, la superclase de dcat:Dataset, dcat:DataService, dcat:Catalog y cualquier otro miembro de un dcat:Catalog. Esta clase tiene propiedades comunes a todos los recursos catalogados, incluyendo conjuntos de datos y servicios de datos. Se recomienda fuertemente que se use una clase más específica. Cuando se describe un recurso que no es un dcat:Dataset o dcat:DataService, se recomienda crear una sub-clase apropiada de dcat:Resource, o usar dcat:Resource con la propiedad dct:type to indicar el tipo específico."@es ;
  skos:scopeNote "La classe di tutte le risorse catalogate, la Superclasse di dcat:Dataset, dcat:DataService, dcat:Catalog e qualsiasi altro membro di dcat:Catalog. Questa classe porta proprietà comuni a tutte le risorse catalogate, inclusi set di dati e servizi dati. Si raccomanda vivamente di utilizzare una sottoclasse più specifica. Quando si descrive una risorsa che non è un dcat:Dataset o dcat:DataService, si raccomanda di creare una sottoclasse di dcat:Resource appropriata, o utilizzare dcat:Resource con la proprietà dct:type per indicare il tipo specifico."@it ;
  skos:scopeNote "The class of all catalogued resources, the Superclass of dcat:Dataset, dcat:DataService, dcat:Catalog and any other member of a dcat:Catalog. This class carries properties common to all catalogued resources, including datasets and data services. It is strongly recommended to use a more specific sub-class. When describing a resource which is not a dcat:Dataset or dcat:DataService, it is recommended to create a suitable sub-class of dcat:Resource, or use dcat:Resource with the dct:type property to indicate the specific type."@en ;
  skos:scopeNote "Třída všech katalogizovaných zdrojů, nadtřída dcat:Dataset, dcat:DataService, dcat:Catalog a všech ostatních členů dcat:Catalog. Tato třída nese vlastnosti společné všem katalogizovaným zdrojům včetně datových sad a datových služeb. Je silně doporučeno používat specifičtější podtřídy, pokud je to možné. Při popisu zdroje, který není ani dcat:Dataset, ani dcat:DataService se doporučuje vytvořit odpovídající podtřídu dcat:Resrouce a nebo použít dcat:Resource s vlastností dct:type pro určení konkrétního typu."@cs ;
  skos:scopeNote "dcat:Resource es un punto de extensión que permite la definición de cualquier tipo de catálogo. Se pueden definir subclases adicionales en perfil de DCAT o una aplicación para catálogos de otro tipo de recursos."@es ;
  skos:scopeNote "dcat:Resource is an extension point that enables the definition of any kind of catalog. Additional subclasses may be defined in a DCAT profile or application for catalogs of other kinds of resources."@en ;
  skos:scopeNote "dcat:Resource je bod pro rozšíření umožňující definici různých druhů katalogů. Další podtřídy lze definovat v profilech DCAT či aplikacích pro katalogy zdrojů jiných druhů."@cs ;
  skos:scopeNote "dcat:Resource è un punto di estensione che consente la definizione di qualsiasi tipo di catalogo. Sottoclassi aggiuntive possono essere definite in un profilo DCAT o in un'applicazione per cataloghi di altri tipi di risorse."@it ;
  skos:scopeNote "Klassen for alle katalogiserede ressourcer, den overordnede klasse for dcat:Dataset, dcat:DataService, dcat:Catalog og enhvert medlem af et dcat:Catalog. Denne klasse bærer egenskaber der gælder alle katalogiserede ressourcer, herunder dataset og datatjenester. Det anbefales kraftigt at mere specifikke subklasser oprettes. Når der beskrives ressourcer der ikke er dcat:Dataset eller dcat:DataService, anbefales det at oprette passende subklasser af dcat:Resource eller at dcat:Resource anvendes sammen med egenskaben dct:type til opmærkning med en specifik typeangivelse."@da ;
  skos:scopeNote "dcat:Resource er et udvidelsespunkt der tillader oprettelsen af enhver type af kataloger. Yderligere subklasser kan defineres i en DCAT-profil eller i en applikation til kataloger med andre typer af ressourcer."@da ;
.
dcat:Role
  a owl:Class ;
  rdfs:comment "A role is the function of a resource or agent with respect to another resource, in the context of resource attribution or resource relationships."@en ;
  rdfs:comment "Role je funkce zdroje či agenta ve vztahu k jinému zdroji, v kontextu přiřazení zdrojů či vztahů mezi zdroji."@cs ;
  rdfs:comment "Un rol es la función de un recurso o agente con respecto a otro recuros, en el contexto de atribución del recurso o de las relaciones entre recursos."@es ;
  rdfs:comment "Un ruolo è la funzione di una risorsa o di un agente rispetto ad un'altra risorsa, nel contesto dell'attribuzione delle risorse o delle relazioni tra risorse."@it ;
  rdfs:comment "En rolle er den funktion en ressource eller aktør har i forhold til en anden ressource, i forbindelse med ressourcekreditering eller ressourcerelationer."@da ;
  rdfs:label "Rol"@es ;
  rdfs:label "Role"@cs ;
  rdfs:label "Role"@en ;
  rdfs:label "Ruolo"@it ;
  rdfs:label "Rolle"@da ;
  rdfs:seeAlso dcat:hadRole ;
  rdfs:subClassOf skos:Concept ;
  skos:changeNote "New class added in DCAT 2.0."@en ;
  skos:changeNote "Nová třída přidaná ve verzi DCAT 2.0."@cs ;
  skos:changeNote "Nueva clase agregada en DCAT 2.0."@es ;
  skos:changeNote "Nuova classe aggiunta in DCAT 2.0."@it ;
  skos:changeNote "Ny klasse tilføjet i DCAT 2.0."@en ;
  skos:definition "A role is the function of a resource or agent with respect to another resource, in the context of resource attribution or resource relationships."@en ;
  skos:definition "Role je funkce zdroje či agenta ve vztahu k jinému zdroji, v kontextu přiřazení zdrojů či vztahů mezi zdroji."@cs ;
  skos:definition "Un rol es la función de un recurso o agente con respecto a otro recuros, en el contexto de atribución del recurso o de las relaciones entre recursos."@es ;
  skos:definition "Un ruolo è la funzione di una risorsa o di un agente rispetto ad un'altra risorsa, nel contesto dell'attribuzione delle risorse o delle relazioni tra risorse."@it ;
  skos:definition "En rolle er den funktion en ressource eller aktør har i forhold til en anden ressource, i forbindelse med ressourcekreditering eller ressourcerelationer."@da ;
  skos:editorialNote "Incluída en DCAT para complementar prov:Role (cuyo uso está limitado a roles en el contexto de una actividad, ya que es el rango es prov:hadRole)."@es ;
  skos:editorialNote "Introdotta in DCAT per completare prov:Role (il cui uso è limitato ai ruoli nel contesto di un'attività, in conseguenza alla definizione del codominio di prov:hadRole)."@it ;
  skos:editorialNote "Introduced into DCAT to complement prov:Role (whose use is limited to roles in the context of an activity, as the range of prov:hadRole)."@en ;
  skos:editorialNote "Přidáno do DCAT pro doplnění třídy prov:Role (jejíž užití je omezeno na role v kontextu aktivit, jakožto obor hodnot vlastnosti prov:hadRole)."@cs ;
  skos:editorialNote "Introduceret i DCAT for at supplere prov:Role (hvis anvendelse er begrænset til roller i forbindelse med en aktivitet, som er rækkevidde for prov:hadRole)."@da ;
  skos:scopeNote "Použito v kvalifikovaném přiřazení pro specifikaci role Agenta ve vztahu k Entitě. Je doporučeno množinu hodnot spravovat jako řízený slovník rolí agentů, jako například http://registry.it.csiro.au/def/isotc211/CI_RoleCode."@cs ;
  skos:scopeNote "Použito v kvalifikovaném vztahu pro specifikaci role Entity ve vztahu k jiné Entitě. Je doporučeno množinu hodnot spravovat jako řízený slovník rolí entit, jako například ISO 19115 DS_AssociationTypeCode http://registry.it.csiro.au/def/isotc211/DS_AssociationTypeCode, IANA Registry of Link Relations https://www.iana.org/assignments/link-relation, DataCite metadata schema, či MARC relators https://id.loc.gov/vocabulary/relators."@cs ;
  skos:scopeNote "Se usa en una atribución cualificada para especificar el rol de un Agente con respecto a una Entidad. Se recomienda que los valores se administren como un vocabulario controlado de roles de agente, como por ejemplo http://registry.it.csiro.au/def/isotc211/CI_RoleCode."@es ;
  skos:scopeNote "Se usa en una relación cualificada para especificar el rol de una Entidad con respecto a otra Entidad. Se recomienda que los valores se administren como los valores de un vocabulario controlado de roles de entidad como por ejemplo: ISO 19115 DS_AssociationTypeCode http://registry.it.csiro.au/def/isotc211/DS_AssociationTypeCode; IANA Registry of Link Relations https://www.iana.org/assignments/link-relation; el esquema de metadatos de DataCite; MARC relators https://id.loc.gov/vocabulary/relators."@es ;
  skos:scopeNote "Used in a qualified-attribution to specify the role of an Agent with respect to an Entity. It is recommended that the values be managed as a controlled vocabulary of agent roles, such as http://registry.it.csiro.au/def/isotc211/CI_RoleCode."@en ;
  skos:scopeNote "Used in a qualified-relation to specify the role of an Entity with respect to another Entity. It is recommended that the values be managed as a controlled vocabulary of entity roles such as: ISO 19115 DS_AssociationTypeCode http://registry.it.csiro.au/def/isotc211/DS_AssociationTypeCode; IANA Registry of Link Relations https://www.iana.org/assignments/link-relation;  DataCite metadata schema;  MARC relators https://id.loc.gov/vocabulary/relators."@en ;
  skos:scopeNote "Utilizzato in un'attribuzione qualificata per specificare il ruolo di un agente rispetto a un'entità. Si consiglia di attribuire i valori considerando un vocabolario controllato dei ruoli dell'agente, ad esempio http://registry.it.csiro.au/def/isotc211/CI_RoleCode."@it ;
  skos:scopeNote "Utilizzato in una relazione qualificata per specificare il ruolo di un'entità rispetto a un'altra entità. Si raccomanda che il valore sia preso da un vocabolario controllato di ruoli di entità come ISO 19115 DS_AssociationTypeCode http://registry.it.csiro.au/def/isotc211/DS_AssociationTypeCode, IANA Registry of Link Relations https://www.iana.org/assignments/link-relation, DataCite metadata schema, o MARC relators https://id.loc.gov/vocabulary/relators."@it ;
  skos:scopeNote "Anvendes i forbindelse med kvalificerede krediteringer til at angive aktørens rolle i forhold til en entitet. Det anbefales at værdierne styres som et kontrolleret udfaldsrum med aktørroller, såsom http://registry.it.csiro.au/def/isotc211/CI_RoleCode."@da ;
  skos:scopeNote "Anvendes i forbindelse med kvalificerede relationer til at specificere en entitets rolle i forhold til en anden entitet. Det anbefales at værdierne styres med et kontrolleret udfaldsrum for for entitetsroller såsom: ISO 19115 DS_AssociationTypeCode http://registry.it.csiro.au/def/isotc211/DS_AssociationTypeCode; IANA Registry of Link Relations https://www.iana.org/assignments/link-relation;  DataCite metadata schema;  MARC relators https://id.loc.gov/vocabulary/relators."@da ;
.
dcat:accessService
  a owl:ObjectProperty ;
  rdfs:comment "A site or end-point that gives access to the distribution of the dataset."@en ;
  rdfs:comment "Umístění či přístupový bod zpřístupňující distribuci datové sady."@cs ;
  rdfs:comment "Un sitio o end-point que da acceso a la distribución de un conjunto de datos."@es ;
  rdfs:comment "Un sito o end-point che dà accesso alla distribuzione del set di dati."@it ;
  rdfs:comment "Et websted eller endpoint der giver adgang til en repræsentation af datasættet."@da ;
  rdfs:label "data access service"@en ;
  rdfs:label "servicio de acceso de datos"@es ;
  rdfs:label "servizio di accesso ai dati"@it ;
  rdfs:label "služba pro přístup k datům"@cs ;
  rdfs:label "dataadgangstjeneste"@da ;
  rdfs:range dcat:DataService ;
  skos:changeNote "New property added in DCAT 2.0."@en ;
  skos:changeNote "Nová vlastnost přidaná ve verzi DCAT 2.0."@cs ;
  skos:changeNote "Nueva propiedad agregada en DCAT 2.0."@es ;
  skos:changeNote "Nuova proprietà aggiunta in DCAT 2.0."@it ;
  skos:changeNote "Ny egenskab tilføjet i DCAT 2.0."@da ;
  skos:definition "A site or end-point that gives access to the distribution of the dataset."@en ;
  skos:definition "Umístění či přístupový bod zpřístupňující distribuci datové sady."@cs ;
  skos:definition "Un sitio o end-point que da acceso a la distribución de un conjunto de datos."@es ;
  skos:definition "Un sito o end-point che dà accesso alla distribuzione del set di dati."@it ;
  skos:definition "Et websted eller endpoint der giver adgang til en repræsentation af datasættet."@da ;
.
dcat:accessURL
  a rdf:Property ;
  a owl:ObjectProperty ;
  rdfs:comment "A URL of a resource that gives access to a distribution of the dataset. E.g. landing page, feed, SPARQL endpoint. Use for all cases except a simple download link, in which case downloadURL is preferred."@en ;
  rdfs:comment "Ceci peut être tout type d'URL qui donne accès à une distribution du jeu de données. Par exemple, un lien à une page HTML contenant un lien au jeu de données, un Flux RSS, un point d'accès SPARQL. Utilisez le lorsque votre catalogue ne contient pas d'information sur quoi il est ou quand ce n'est pas téléchargeable."@fr ;
  rdfs:comment "Puede ser cualquier tipo de URL que de acceso a una distribución del conjunto de datos, e.g., página de destino, descarga, URL feed, punto de acceso SPARQL. Esta propriedad se debe usar cuando su catálogo de datos no tiene información sobre donde está o cuando no se puede descargar."@es ;
  rdfs:comment "URL zdroje, přes které je přístupná distribuce datové sady. Příkladem může být vstupní stránka, RSS kanál či SPARQL endpoint. Použijte ve všech případech kromě URL souboru ke stažení, pro které je lepší použít dcat:downloadURL."@cs ;
  rdfs:comment "Un URL di una risorsa che consente di accedere a una distribuzione del set di dati. Per esempio, pagina di destinazione, feed, endpoint SPARQL. Da utilizzare per tutti i casi, tranne  quando  si tratta di un semplice link per il download nel qual caso è preferito downloadURL."@it ;
  rdfs:comment "Μπορεί να είναι οποιουδήποτε είδους URL που δίνει πρόσβαση στη διανομή ενός συνόλου δεδομένων. Π.χ. ιστοσελίδα αρχικής πρόσβασης, μεταφόρτωση, feed URL, σημείο διάθεσης SPARQL. Να χρησιμοποιείται όταν ο κατάλογος δεν περιέχει πληροφορίες εαν πρόκειται ή όχι για μεταφορτώσιμο αρχείο."@el ;
  rdfs:comment "أي رابط يتيح الوصول إلى البيانات. إذا كان الرابط هو ربط مباشر لملف يمكن تحميله استخدم الخاصية downloadURL"@ar ;
  rdfs:comment "データセットの配信にアクセス権を与えるランディング・ページ、フィード、SPARQLエンドポイント、その他の種類の資源。"@ja ;
  rdfs:comment "En URL for en ressource som giver adgang til en repræsentation af datsættet. Fx destinationsside, feed, SPARQL-endpoint. Anvendes i alle sammenhænge undtagen til angivelse af et simpelt download link hvor anvendelse af egenskaben downloadURL foretrækkes."@da ;
  rdfs:domain dcat:Distribution ;
  rdfs:isDefinedBy <http://www.w3.org/TR/vocab-dcat/> ;
  rdfs:label "URL d'accès"@fr ;
  rdfs:label "URL de acceso"@es ;
  rdfs:label "URL πρόσβασης"@el ;
  rdfs:label "access address"@en ;
  rdfs:label "indirizzo di accesso"@it ;
  rdfs:label "přístupová adresa"@cs ;
  rdfs:label "رابط وصول"@ar ;
  rdfs:label "アクセスURL"@ja ;
  rdfs:label "adgangsadresse"@da ;
  skos:altLabel "adgangsURL"@da ;
  rdfs:range rdfs:Resource ;
  owl:propertyChainAxiom (
      dcat:accessService
      dcat:endpointURL
    ) ;
  skos:definition "A URL of a resource that gives access to a distribution of the dataset. E.g. landing page, feed, SPARQL endpoint. Use for all cases except a simple download link, in which case downloadURL is preferred."@en ;
  skos:definition "Ceci peut être tout type d'URL qui donne accès à une distribution du jeu de données. Par exemple, un lien à une page HTML contenant un lien au jeu de données, un Flux RSS, un point d'accès SPARQL. Utilisez le lorsque votre catalogue ne contient pas d'information sur quoi il est ou quand ce n'est pas téléchargeable."@fr ;
  skos:definition "Puede ser cualquier tipo de URL que de acceso a una distribución del conjunto de datos, e.g., página de destino, descarga, URL feed, punto de acceso SPARQL. Esta propriedad se debe usar cuando su catálogo de datos no tiene información sobre donde está o cuando no se puede descargar."@es ;
  skos:definition "URL zdroje, přes které je přístupná distribuce datové sady. Příkladem může být vstupní stránka, RSS kanál či SPARQL endpoint. Použijte ve všech případech kromě URL souboru ke stažení, pro které je lepší použít dcat:downloadURL."@cs ;
  skos:definition "Un URL di una risorsa che consente di accedere a una distribuzione del set di dati. Per esempio, pagina di destinazione, feed, endpoint SPARQL. Da utilizzare per tutti i casi, tranne  quando  si tratta di un semplice link per il download nel qual caso è preferito downloadURL."@it ;
  skos:definition "Μπορεί να είναι οποιουδήποτε είδους URL που δίνει πρόσβαση στη διανομή ενός συνόλου δεδομένων. Π.χ. ιστοσελίδα αρχικής πρόσβασης, μεταφόρτωση, feed URL, σημείο διάθεσης SPARQL. Να χρησιμοποιείται όταν ο κατάλογος δεν περιέχει πληροφορίες εαν πρόκειται ή όχι για μεταφορτώσιμο αρχείο."@el ;
  skos:definition "أي رابط يتيح الوصول إلى البيانات. إذا كان الرابط هو ربط مباشر لملف يمكن تحميله استخدم الخاصية downloadURL"@ar ;
  skos:definition "データセットの配信にアクセス権を与えるランディング・ページ、フィード、SPARQLエンドポイント、その他の種類の資源。"@ja ;
  skos:definition "En URL for en ressource som giver adgang til en repræsentation af datsættet. Fx destinationsside, feed, SPARQL-endpoint. Anvendes i alle sammenhænge undtagen til angivelse af et simpelt download link hvor anvendelse af egenskaben downloadURL foretrækkes."@da ;
  skos:editorialNote "Status: English Definition text modified by DCAT revision team, updated Italian and Czech translation provided, translations for other languages pending."@en ;
  skos:editorialNote "rdfs:label, rdfs:comment and skos:scopeNote have been modified. Non-english versions except for Italian must be updated."@en ;
  skos:scopeNote "El rango es una URL. Si la distribución es accesible solamente través de una página de destino (es decir, si no se conoce una URL de descarga directa), entonces el enlance a la página de destino debe ser duplicado como accessURL en la distribución."@es ;
  skos:scopeNote "If the distribution(s) are accessible only through a landing page (i.e. direct download URLs are not known), then the landing page link should be duplicated as accessURL on a distribution."@en ;
  skos:scopeNote "La valeur est une URL. Si la distribution est accessible seulement au travers d'une page d'atterrissage (c-à-dire on n'ignore une URL de téléchargement direct), alors le lien à la page d'atterrissage doit être dupliqué comee accessURL sur la distribution."@fr ;
  skos:scopeNote "Pokud jsou distribuce přístupné pouze přes vstupní stránku (tj. URL pro přímé stažení nejsou známa), pak by URL přístupové stránky mělo být duplikováno ve vlastnosti distribuce accessURL."@cs ;
  skos:scopeNote "Se le distribuzioni sono accessibili solo attraverso una pagina web (ad esempio, gli URL per il download diretto non sono noti), allora il link della pagina web deve essere duplicato come accessURL sulla distribuzione."@it ;
  skos:scopeNote "Η τιμή είναι ένα URL. Αν η/οι διανομή/ές είναι προσβάσιμη/ες μόνο μέσω μίας ιστοσελίδας αρχικής πρόσβασης (δηλαδή αν δεν υπάρχουν γνωστές διευθύνσεις άμεσης μεταφόρτωσης), τότε ο σύνδεσμος της ιστοσελίδας αρχικής πρόσβασης πρέπει να αναπαραχθεί ως accessURL σε μία διανομή."@el ;
  skos:scopeNote "確実にダウンロードでない場合や、ダウンロードかどうかが不明である場合は、downloadURLではなく、accessURLを用いてください。ランディング・ページを通じてしか配信にアクセスできない場合（つまり、直接的なダウンロードURLが不明）は、配信におけるaccessURLとしてランディング・ページのリンクをコピーすべきです（SHOULD）。"@ja ;
  skos:scopeNote "Hvis en eller flere distributioner kun er tilgængelige via en destinationsside (dvs. en URL til direkte download er ikke kendt), så bør destinationssidelinket gentages som adgangsadresse for distributionen."@da ;
.
dcat:bbox
  a rdf:Property ;
  a owl:DatatypeProperty ;
  rdfs:domain dct:Location ;
  rdfs:label "bounding box"@en ;
  rdfs:label "quadro di delimitazione"@it ;
  rdfs:label "cuadro delimitador"@es ;
  rdfs:label "ohraničení oblasti"@cs ;
  rdfs:label "bounding box"@da ;
  rdfs:range rdfs:Literal ;
  skos:changeNote "New property added in DCAT 2.0."@en ;
  skos:changeNote "Nuova proprietà aggiunta in DCAT 2.0."@it ;
  skos:changeNote "Nová vlastnost přidaná ve verzi DCAT 2.0."@cs ;
  skos:changeNote "Propiedad nueva agregada en DCAT 2.0."@es ;
  skos:changeNote "Ny egenskab tilføjet i DCAT 2.0."@da ;
  skos:definition "El cuadro delimitador geográfico para un recurso."@es ;
  skos:definition "Ohraničení geografické oblasti zdroje."@cs ;
  skos:definition "The geographic bounding box of a resource."@en ;
  skos:definition "Il riquadro di delimitazione geografica di una risorsa."@it ;
  skos:definition "Den geografiske omskrevne firkant af en ressource."@da ;
  skos:scopeNote "El rango de esta propiedad es intencionalmente genérico con el propósito de permitir distintas codificaciones geométricas. Por ejemplo, la geometría puede ser codificada como WKT (geosparql:wktLiteral [GeoSPARQL]) o [GML] (geosparql:asGML [GeoSPARQL])."@es ;
  skos:scopeNote "Obor hodnot této vlastnosti je úmyslně obecný, aby umožnil různé kódování geometrií. Geometrie by kupříkladu mohla být kódována jako WKT (geosparql:wktLiteral [GeoSPARQL]) či [GML] (geosparql:asGML [GeoSPARQL])."@cs ;
  skos:scopeNote "The range of this property is intentionally generic, with the purpose of allowing different geometry encodings. E.g., the geometry could be encoded with as WKT (geosparql:wktLiteral [GeoSPARQL]) or [GML] (geosparql:asGML [GeoSPARQL])."@en ;
  skos:scopeNote "Il range di questa proprietà è volutamente generica, con lo scopo di consentire diverse codifiche geometriche. Ad esempio, la geometria potrebbe essere codificata con WKT (geosparql:wktLiteral [GeoSPARQL]) o [GML] (geosparql:asGML [GeoSPARQL])."@it ;
  skos:scopeNote "Rækkevidden for denne egenskab er bevidst generisk defineret med det formål at tillade forskellige kodninger af geometrier. Geometrien kan eksempelvis repræsenteres som WKT (geosparql:asWKT [GeoSPARQL]) eller [GML] (geosparql:asGML [GeoSPARQL])."@da ;
.
dcat:byteSize
  a rdf:Property ;
  a owl:DatatypeProperty ;
  rdfs:comment "El tamaño de una distribución en bytes."@es ;
  rdfs:comment "La dimensione di una distribuzione in byte."@it ;
  rdfs:comment "La taille de la distribution en octects"@fr ;
  rdfs:comment "The size of a distribution in bytes."@en ;
  rdfs:comment "Velikost distribuce v bajtech."@cs ;
  rdfs:comment "Το μέγεθος μιας διανομής σε bytes."@el ;
  rdfs:comment "الحجم بالبايتات "@ar ;
  rdfs:comment "バイトによる配信のサイズ。"@ja ;
  rdfs:comment "Størrelsen af en distributionen angivet i bytes."@da ;
  rdfs:domain dcat:Distribution ;
  rdfs:isDefinedBy <http://www.w3.org/TR/vocab-dcat/> ;
  rdfs:label "byte size"@en ;
  rdfs:label "dimensione in byte"@it ;
  rdfs:label "taille en octects"@fr ;
  rdfs:label "tamaño en bytes"@es ;
  rdfs:label "velikost v bajtech"@cs ;
  rdfs:label "μέγεθος σε bytes"@el ;
  rdfs:label "الحجم بالبايت"@ar ;
  rdfs:label "バイト・サイズ"@ja ;
  rdfs:label "bytestørrelse"@da ;
  rdfs:range rdfs:Literal ;
  skos:definition "El tamaño de una distribución en bytes."@es ;
  skos:definition "La dimensione di una distribuzione in byte."@it ;
  skos:definition "La taille de la distribution en octects."@fr ;
  skos:definition "The size of a distribution in bytes."@en ;
  skos:definition "Velikost distribuce v bajtech."@cs ;
  skos:definition "Το μέγεθος μιας διανομής σε bytes."@el ;
  skos:definition "الحجم بالبايتات "@ar ;
  skos:definition "バイトによる配信のサイズ。"@ja ;
  skos:definition "Størrelsen af en distribution angivet i bytes."@da ;
  skos:scopeNote "El tamaño en bytes puede ser aproximado cuando se desconoce el tamaño exacto. El valor literal de dcat:byteSize debe tener tipo 'xsd:decimal'."@es ;
  skos:scopeNote "La dimensione in byte può essere approssimata quando non si conosce la dimensione precisa. Il valore di dcat:byteSize dovrebbe essere espresso come un xsd:decimal."@it ;
  skos:scopeNote "La taille en octects peut être approximative lorsque l'on ignore la taille réelle. La valeur littérale de dcat:byteSize doit être de type xsd:decimal."@fr ;
  skos:scopeNote "The size in bytes can be approximated when the precise size is not known. The literal value of dcat:byteSize should by typed as xsd:decimal."@en ;
  skos:scopeNote "Velikost v bajtech může být přibližná, pokud její přesná hodnota není známa. Literál s hodnotou dcat:byteSize by měl mít datový typ xsd:decimal."@cs ;
  skos:scopeNote "Το μέγεθος σε bytes μπορεί να προσεγγιστεί όταν η ακριβής τιμή δεν είναι γνωστή. Η τιμή της dcat:byteSize θα πρέπει να δίνεται με τύπο δεδομένων xsd:decimal."@el ;
  skos:scopeNote "الحجم يمكن أن يكون تقريبي إذا كان الحجم الدقيق غير معروف"@ar ;
  skos:scopeNote "正確なサイズが不明である場合、サイズは、バイトによる近似値を示すことができます。"@ja ;
  skos:scopeNote "Bytestørrelsen kan approximeres hvis den præcise størrelse ikke er kendt. Værdien af dcat:byteSize bør angives som xsd:decimal."@da ;
.
dcat:catalog
  a owl:ObjectProperty ;
  rdfs:comment "A catalog whose contents are of interest in the context of this catalog."@en ;
  rdfs:comment "Katalog, jehož obsah je v kontextu tohoto katalogu zajímavý."@cs ;
  rdfs:comment "Un catalogo i cui contenuti sono di interesse nel contesto di questo catalogo."@it ;
  rdfs:comment "Un catálogo cuyo contenido es de interés en el contexto del catálogo que está siendo descripto."@es ;
  rdfs:comment "Et katalog hvis indhold er relevant i forhold til det aktuelle katalog."@da ;
  rdfs:domain dcat:Catalog ;
  rdfs:label "catalog"@en ;
  rdfs:label "catalogo"@it ;
  rdfs:label "catálogo"@es ;
  rdfs:label "katalog"@cs ;
  rdfs:label "katalog"@da ;
  skos:altLabel "har delkatalog"@da ;
  rdfs:range dcat:Catalog ;
  rdfs:subPropertyOf dct:hasPart ;
  rdfs:subPropertyOf rdfs:member ;
  skos:changeNote "New property added in DCAT 2.0."@en ;
  skos:changeNote "Nová vlastnost přidaná ve verzi DCAT 2.0."@cs ;
  skos:changeNote "Nueva propiedad agregada en DCAT 2.0."@es ;
  skos:changeNote "Nuova proprietà aggiunta in DCAT 2.0."@it ;
  skos:definition "A catalog whose contents are of interest in the context of this catalog."@en ;
  skos:definition "Katalog, jehož obsah je v kontextu tohoto katalogu zajímavý."@cs ;
  skos:definition "Un catalogo i cui contenuti sono di interesse nel contesto di questo catalogo."@it ;
  skos:definition "Un catálogo cuyo contenido es de interés en el contexto del catálogo que está siendo descripto."@es ;
  skos:definition "Et katalog hvis indhold er relevant i forhold til det aktuelle katalog."@da ;
.
dcat:centroid
  a rdf:Property ;
  a owl:DatatypeProperty ;
  rdfs:domain dct:Location ;
  rdfs:label "centroid"@cs ;
  rdfs:label "centroid"@en ;
  rdfs:label "centroide"@it ;
  rdfs:label "centroide"@es ;
  rdfs:label "geometrisk tyngdepunkt"@da ;
  skos:altLabel "centroide"@da ;
  rdfs:range rdfs:Literal ;
  skos:changeNote "New property added in DCAT 2.0."@en ;
  skos:changeNote "Nuova proprietà aggiunta in DCAT 2.0."@it ;
  skos:changeNote "Nová vlastnost přidaná ve verzi DCAT 2.0."@cs ;
  skos:changeNote "Nueva propiedad agregada en DCAT 2.0."@es ;
  skos:changeNote "Ny egenskab tilføjet i DCAT 2.0."@da ;
  skos:definition "El centro geográfico (centroide) de un recurso."@es ;
  skos:definition "Geografický střed (centroid) zdroje."@cs ;
  skos:definition "The geographic center (centroid) of a resource."@en ;
  skos:definition "Il centro geografico (centroide) di una risorsa."@it ;
  skos:definition "Det geometrisk tyngdepunkt (centroid) for en ressource."@da ;
  skos:scopeNote "El rango de esta propiedad es intencionalmente genérico con el objetivo de permitir distintas codificaciones geométricas. Por ejemplo, la geometría puede codificarse como WKT (geosparql:wktLiteral [GeoSPARQL]) o [GML] (geosparql:asGML [GeoSPARQL])."@es ;
  skos:scopeNote "Obor hodnot této vlastnosti je úmyslně obecný, aby umožnil různé kódování geometrií. Geometrie by kupříkladu mohla být kódována jako WKT (geosparql:wktLiteral [GeoSPARQL]) či [GML] (geosparql:asGML [GeoSPARQL])."@cs ;
  skos:scopeNote "The range of this property is intentionally generic, with the purpose of allowing different geometry encodings. E.g., the geometry could be encoded with as WKT (geosparql:wktLiteral [GeoSPARQL]) or [GML] (geosparql:asGML [GeoSPARQL])."@en ;
  skos:scopeNote "Il range di questa proprietà è volutamente generica, con lo scopo di consentire diverse codifiche geometriche. Ad esempio, la geometria potrebbe essere codificata con WKT (geosparql:wktLiteral [GeoSPARQL]) o [GML] (geosparql:asGML [GeoSPARQL])."@it ;
  skos:scopeNote "Rækkevidden for denne egenskab er bevidst generisk definere med det formål at tillade forskellige geokodninger. Geometrien kan eksempelvis repræsenteres som WKT (geosparql:asWKT [GeoSPARQL]) eller [GML] (geosparql:asGML [GeoSPARQL])."@da ;
.
dcat:compressFormat
  a rdf:Property ;
  a owl:ObjectProperty ;
  rdfs:comment "El formato de la distribución en el que los datos están en forma comprimida, e.g. para reducir el tamaño del archivo a bajar."@es ;
  rdfs:comment "Formát komprese souboru, ve kterém jsou data poskytována v komprimované podobě, např. ke snížení velikosti souboru ke stažení."@cs ;
  rdfs:comment "Il formato di compressione della distribuzione nel quale i dati sono in forma compressa, ad es. per ridurre le dimensioni del file da scaricare."@it ;
  rdfs:comment "The compression format of the distribution in which the data is contained in a compressed form, e.g. to reduce the size of the downloadable file."@en ;
  rdfs:comment "Kompressionsformatet for distributionen som indeholder data i et komprimeret format, fx for at reducere størrelsen af downloadfilen."@da ;
  rdfs:domain dcat:Distribution ;
  rdfs:isDefinedBy <https://www.w3.org/TR/vocab-dcat-2/> ;
  rdfs:label "compression format"@en ;
  rdfs:label "formato de compresión"@es ;
  rdfs:label "formato di compressione"@it ;
  rdfs:label "formát komprese"@cs ;
  rdfs:label "kompressionsformat"@da ;
  rdfs:range dct:MediaType ;
  rdfs:subPropertyOf dct:format ;
  skos:changeNote "New property added in DCAT 2.0."@en ;
  skos:changeNote "Nová vlastnost přidaná ve verzi DCAT 2.0."@cs ;
  skos:changeNote "Nueva propiedad agregada en DCAT 2.0."@es ;
  skos:changeNote "Nuova proprietà aggiunta in DCAT 2.0."@it ;
  skos:changeNote "Ny egenskab tilføjet i DCAT 2.0."@da ;
  skos:definition "El formato de la distribución en el que los datos están en forma comprimida, e.g. para reducir el tamaño del archivo a bajar."@es ;
  skos:definition "Formát komprese souboru, ve kterém jsou data poskytována v komprimované podobě, např. ke snížení velikosti souboru ke stažení."@cs ;
  skos:definition "Il formato di compressione della distribuzione nel quale i dati sono in forma compressa, ad es. per ridurre le dimensioni del file da scaricare."@it ;
  skos:definition "The compression format of the distribution in which the data is contained in a compressed form, e.g. to reduce the size of the downloadable file."@en ;
  skos:definition "Kompressionsformatet for distributionen som indeholder data i et komprimeret format, fx for at reducere størrelsen af downloadfilen."@da ;
  skos:scopeNote "Esta propiedad se debe usar cuando los archivos de la distribución están comprimidos, por ejemplo en un archivo ZIP. El formato DEBERÍA expresarse usando un 'media type', tales como los definidos en el registro IANA de 'media types' https://www.iana.org/assignments/media-types/, si está disponibles."@es ;
  skos:scopeNote "Questa proprietà deve essere utilizzata quando i file nella distribuzione sono compressi, ad es. in un file ZIP. Il formato DOVREBBE essere espresso usando un tipo di media come definito dal registro dei tipi di media IANA https://www.iana.org/assignments/media-types/, se disponibile."@it ;
  skos:scopeNote "Tato vlastnost se použije, když jsou soubory v distribuci komprimovány, např. v ZIP souboru. Formát BY MĚL být vyjádřen pomocí typu média definovaného v registru IANA https://www.iana.org/assignments/media-types/, pokud existuje."@cs ;
  skos:scopeNote "This property is to be used when the files in the distribution are compressed, e.g. in a ZIP file. The format SHOULD be expressed using a media type as defined by IANA media types registry https://www.iana.org/assignments/media-types/, if available."@en ;
  skos:scopeNote "Denne egenskab kan anvendes når filerne i en distribution er blevet komprimeret, fx i en ZIP-fil. Formatet BØR udtrykkes ved en medietype som defineret i 'IANA media types registry', hvis der optræder en relevant medietype dér: https://www.iana.org/assignments/media-types/."@da ;
.
dcat:contactPoint
  a rdf:Property ;
  a owl:ObjectProperty ;
  rdfs:comment "Información relevante de contacto para el recurso catalogado. Se recomienda el uso de vCard."@es ;
  rdfs:comment "Informazioni di contatto rilevanti per la risorsa catalogata. Si raccomanda l'uso di vCard."@it ;
  rdfs:comment "Relevant contact information for the catalogued resource. Use of vCard is recommended."@en ;
  rdfs:comment "Relevantní kontaktní informace pro katalogizovaný zdroj. Doporučuje se použít slovník VCard."@cs ;
  rdfs:comment "Relie un jeu de données à une information de contact utile en utilisant VCard."@fr ;
  rdfs:comment "Συνδέει ένα σύνολο δεδομένων με ένα σχετικό σημείο επικοινωνίας, μέσω VCard."@el ;
  rdfs:comment "تربط قائمة البيانات بعنوان اتصال موصف  باستخدام VCard"@ar ;
  rdfs:comment "データセットを、VCardを用いて提供されている適切な連絡先情報にリンクします。"@ja ;
  rdfs:comment "Relevante kontaktoplysninger for den katalogiserede ressource. Anvendelse af vCard anbefales."@da ;
  rdfs:isDefinedBy <http://www.w3.org/TR/vocab-dcat/> ;
  rdfs:label "Punto de contacto"@es ;
  rdfs:label "contact point"@en ;
  rdfs:label "kontaktní bod"@cs ;
  rdfs:label "point de contact"@fr ;
  rdfs:label "punto di contatto"@it ;
  rdfs:label "σημείο επικοινωνίας"@el ;
  rdfs:label "عنوان اتصال"@ar ;
  rdfs:label "窓口"@ja ;
  rdfs:label "kontaktpunkt"@da ;
  rdfs:range vcard:Kind ;
  skos:definition "Información relevante de contacto para el recurso catalogado. Se recomienda el uso de vCard."@es ;
  skos:definition "Informazioni di contatto rilevanti per la risorsa catalogata. Si raccomanda l'uso di vCard."@it ;
  skos:definition "Relevant contact information for the catalogued resource. Use of vCard is recommended."@en ;
  skos:definition "Relevantní kontaktní informace pro katalogizovaný zdroj. Doporučuje se použít slovník VCard."@cs ;
  skos:definition "Relie un jeu de données à une information de contact utile en utilisant VCard."@fr ;
  skos:definition "Συνδέει ένα σύνολο δεδομένων με ένα σχετικό σημείο επικοινωνίας, μέσω VCard."@el ;
  skos:definition "تربط قائمة البيانات بعنوان اتصال موصف  باستخدام VCard"@ar ;
  skos:definition "データセットを、VCardを用いて提供されている適切な連絡先情報にリンクします。"@ja ;
  skos:definition "Relevante kontaktoplysninger for den katalogiserede ressource. Anvendelse af vCard anbefales."@da ;
  skos:editorialNote "Status: English Definition text modified by DCAT revision team, Italian, Spanish and Czech translations provided, other translations pending."@en ;
.
dcat:dataset
  a rdf:Property ;
  a owl:ObjectProperty ;
  rdfs:comment "A collection of data that is listed in the catalog."@en ;
  rdfs:comment "Kolekce dat, která je katalogizována v katalogu."@cs ;
  rdfs:comment "Relie un catalogue à un jeu de données faisant partie de ce catalogue."@fr ;
  rdfs:comment "Un conjunto de datos que se lista en el catálogo."@es ;
  rdfs:comment "Una raccolta di dati che è elencata nel catalogo."@it ;
  rdfs:comment "Συνδέει έναν κατάλογο με ένα σύνολο δεδομένων το οποίο ανήκει στον εν λόγω κατάλογο."@el ;
  rdfs:comment "تربط الفهرس بقائمة بيانات ضمنه"@ar ;
  rdfs:comment "カタログの一部であるデータセット。"@ja ;
  rdfs:comment "En samling af data som er opført i kataloget."@da ;
  rdfs:domain dcat:Catalog ;
  rdfs:isDefinedBy <http://www.w3.org/TR/vocab-dcat/> ;
  rdfs:label "conjunto de datos"@es ;
  rdfs:label "dataset"@en ;
  rdfs:label "dataset"@it ;
  rdfs:label "datová sada"@cs ;
  rdfs:label "jeu de données"@fr ;
  rdfs:label "σύνολο δεδομένων"@el ;
  rdfs:label "قائمة بيانات"@ar ;
  rdfs:label "データセット"@ja ;
  rdfs:label "datasæt"@da ;
  skos:altLabel "har datasæt"@da ;
  skos:altLabel "datasamling"@da ;
  rdfs:range dcat:Dataset ;
  rdfs:subPropertyOf dct:hasPart ;
  rdfs:subPropertyOf rdfs:member ;
  skos:definition "A collection of data that is listed in the catalog."@en ;
  skos:definition "Kolekce dat, která je katalogizována v katalogu."@cs ;
  skos:definition "Relie un catalogue à un jeu de données faisant partie de ce catalogue."@fr ;
  skos:definition "Un conjunto de datos que se lista en el catálogo."@es ;
  skos:definition "Una raccolta di dati che è elencata nel catalogo."@it ;
  skos:definition "Συνδέει έναν κατάλογο με ένα σύνολο δεδομένων το οποίο ανήκει στον εν λόγω κατάλογο."@el ;
  skos:definition "تربط الفهرس بقائمة بيانات ضمنه"@ar ;
  skos:definition "カタログの一部であるデータセット。"@ja ;
  skos:definition "En samling af data som er opført i kataloget."@da ;
  skos:editorialNote "Status: English Definition text modified by DCAT revision team, Italian, Spanish and Czech translation provided, other translations pending."@en ;
.
dcat:distribution
  a rdf:Property ;
  a owl:ObjectProperty ;
  rdfs:comment "An available distribution of the dataset."@en ;
  rdfs:comment "Connecte un jeu de données à des distributions disponibles."@fr ;
  rdfs:comment "Dostupná distribuce datové sady."@cs ;
  rdfs:comment "Una distribución disponible del conjunto de datos."@es ;
  rdfs:comment "Una distribuzione disponibile per il set di dati."@it ;
  rdfs:comment "Συνδέει ένα σύνολο δεδομένων με μία από τις διαθέσιμες διανομές του."@el ;
  rdfs:comment "تربط قائمة البيانات بطريقة أو بشكل يسمح  الوصول الى البيانات"@ar ;
  rdfs:comment "データセットを、その利用可能な配信に接続します。"@ja ;
  rdfs:comment "En tilgængelig repræsentation af datasættet."@da ;
  rdfs:domain dcat:Dataset ;
  rdfs:isDefinedBy <http://www.w3.org/TR/vocab-dcat/> ;
  rdfs:label "distribuce"@cs ;
  rdfs:label "distribución"@es ;
  rdfs:label "distribution"@en ;
  rdfs:label "distribution"@fr ;
  rdfs:label "distribuzione"@it ;
  rdfs:label "distribution"@da ;
  skos:altLabel "har distribution"@da ;
  rdfs:label "διανομή"@el ;
  rdfs:label "توزيع"@ar ;
  rdfs:label "データセット配信"@ja ;
  rdfs:range dcat:Distribution ;
  rdfs:subPropertyOf dct:relation ;
  skos:definition "An available distribution of the dataset."@en ;
  skos:definition "Connecte un jeu de données à des distributions disponibles."@fr ;
  skos:definition "Dostupná distribuce datové sady."@cs ;
  skos:definition "Una distribución disponible del conjunto de datos."@es ;
  skos:definition "Una distribuzione disponibile per il set di dati."@it ;
  skos:definition "Συνδέει ένα σύνολο δεδομένων με μία από τις διαθέσιμες διανομές του."@el ;
  skos:definition "تربط قائمة البيانات بطريقة أو بشكل يسمح  الوصول الى البيانات"@ar ;
  skos:definition "データセットを、その利用可能な配信に接続します。"@ja ;
  skos:definition "En tilgængelig repræsentation af datasættet."@da ;
  skos:editorialNote "Status: English Definition text modified by DCAT revision team, translations pending (except for Italian, Spanish and Czech)."@en ;
.
dcat:downloadURL
  a rdf:Property ;
  a owl:ObjectProperty ;
  rdfs:comment "Ceci est un lien direct à un fichier téléchargeable en un format donnée. Exple fichier CSV ou RDF. Le format est décrit par les propriétés de distribution dct:format et/ou dcat:mediaType."@fr ;
  rdfs:comment "La URL de un archivo descargable en el formato dato. Por ejemplo, archivo CSV o archivo RDF. El formato se describe con las propiedades de la distribución dct:format y/o dcat:mediaType."@es ;
  rdfs:comment "Questo è un link diretto al file scaricabile in un dato formato. E.g. un file CSV o un file RDF. Il formato è descritto dal dct:format e/o dal dcat:mediaType della distribuzione."@it ;
  rdfs:comment "The URL of the downloadable file in a given format. E.g. CSV file or RDF file. The format is indicated by the distribution's dct:format and/or dcat:mediaType."@en ;
  rdfs:comment "URL souboru ke stažení v daném formátu, například CSV nebo RDF soubor. Formát je popsán vlastností distribuce dct:format a/nebo dcat:mediaType."@cs ;
  rdfs:comment "dcat:downloadURLはdcat:accessURLの特定の形式です。しかし、DCATプロファイルが非ダウンロード・ロケーションに対してのみaccessURLを用いる場合には、より強い分離を課すことを望む可能性があるため、この含意を強化しないように、DCATは、dcat:downloadURLをdcat:accessURLのサブプロパティーであると定義しません。"@ja ;
  rdfs:comment "Είναι ένας σύνδεσμος άμεσης μεταφόρτωσης ενός αρχείου σε μια δεδομένη μορφή. Π.χ. ένα αρχείο CSV ή RDF. Η μορφη αρχείου περιγράφεται από τις ιδιότητες dct:format ή/και dcat:mediaType της διανομής."@el ;
  rdfs:comment "رابط مباشر لملف يمكن تحميله. نوع الملف يتم توصيفه باستخدام الخاصية dct:format dcat:mediaType "@ar ;
  rdfs:comment "URL til fil der kan downloades i et bestemt format. Fx en CSV-fil eller en RDF-fil. Formatet for distributionen angives ved hjælp af egenskaberne dct:format og/eller dcat:mediaType."@da ;
  rdfs:domain dcat:Distribution ;
  rdfs:isDefinedBy <http://www.w3.org/TR/vocab-dcat/> ;
  rdfs:label "URL de descarga"@es ;
  rdfs:label "URL de téléchargement"@fr ;
  rdfs:label "URL di scarico"@it ;
  rdfs:label "URL souboru ke stažení"@cs ;
  rdfs:label "URL μεταφόρτωσης"@el ;
  rdfs:label "download URL"@en ;
  rdfs:label "رابط تحميل"@ar ;
  rdfs:label "ダウンロードURL"@ja ;
  rdfs:label "downloadURL"@da ;
  rdfs:range rdfs:Resource ;
  skos:definition "Ceci est un lien direct à un fichier téléchargeable en un format donnée. Exple fichier CSV ou RDF. Le format est décrit par les propriétés de distribution dct:format et/ou dcat:mediaType."@fr ;
  skos:definition "La URL de un archivo descargable en el formato dato. Por ejemplo, archivo CSV o archivo RDF. El formato se describe con las propiedades de la distribución dct:format y/o dcat:mediaType."@es ;
  skos:definition "Questo è un link diretto al file scaricabile in un dato formato. E.g. un file CSV o un file RDF. Il formato è descritto dal dct:format e/o dal dcat:mediaType della distribuzione."@it ;
  skos:definition "The URL of the downloadable file in a given format. E.g. CSV file or RDF file. The format is indicated by the distribution's dct:format and/or dcat:mediaType."@en ;
  skos:definition "URL souboru ke stažení v daném formátu, například CSV nebo RDF soubor. Formát je popsán vlastností distribuce dct:format a/nebo dcat:mediaType."@cs ;
  skos:definition "dcat:downloadURLはdcat:accessURLの特定の形式です。しかし、DCATプロファイルが非ダウンロード・ロケーションに対してのみaccessURLを用いる場合には、より強い分離を課すことを望む可能性があるため、この含意を強化しないように、DCATは、dcat:downloadURLをdcat:accessURLのサブプロパティーであると定義しません。"@ja ;
  skos:definition "Είναι ένας σύνδεσμος άμεσης μεταφόρτωσης ενός αρχείου σε μια δεδομένη μορφή. Π.χ. ένα αρχείο CSV ή RDF. Η μορφη αρχείου περιγράφεται από τις ιδιότητες dct:format ή/και dcat:mediaType της διανομής."@el ;
  skos:definition "URL til fil der kan downloades i et bestemt format. Fx en CSV-fil eller en RDF-fil. Formatet for distributionen angives ved hjælp af egenskaberne dct:format og/eller dcat:mediaType."@da ;
  skos:definition "رابط مباشر لملف يمكن تحميله. نوع الملف يتم توصيفه باستخدام الخاصية dct:format dcat:mediaType "@ar ;
  skos:editorialNote "Status: English  Definition text modified by DCAT revision team, Italian, Spanish and Czech translation updated, other translations pending."@en ;
  skos:editorialNote "rdfs:label, rdfs:comment and/or skos:scopeNote have been modified. Non-english versions must be updated."@en ;
  skos:scopeNote "El valor es una URL."@es ;
  skos:scopeNote "La valeur est une URL."@fr ;
  skos:scopeNote "dcat:downloadURL BY MĚLA být použita pro adresu, ze které je distribuce přímo přístupná, typicky skrze požadavek HTTP Get."@cs ;
  skos:scopeNote "dcat:downloadURL DOVREBBE essere utilizzato per l'indirizzo a cui questa distribuzione è disponibile direttamente, in genere attraverso una richiesta Get HTTP."@it ;
  skos:scopeNote "dcat:downloadURL SHOULD be used for the address at which this distribution is available directly, typically through a HTTP Get request."@en ;
  skos:scopeNote "Η τιμή είναι ένα URL."@el ;
  skos:scopeNote "dcat:downloadURL BØR anvendes til angivelse af den adresse hvor distributionen er tilgængelig direkte, typisk gennem et HTTP Get request."@da ;
.
dcat:endDate
  a rdf:Property ;
  a owl:DatatypeProperty ;
  rdfs:domain dct:PeriodOfTime ;
  rdfs:label "datum konce"@cs ;
  rdfs:label "end date"@en ;
  rdfs:label "data di fine"@it ;
  rdfs:label "fecha final"@es ;
  rdfs:label "slutdato"@da ;
  skos:altLabel "sluttidspunkt"@da ;
  rdfs:range rdfs:Literal ;
  skos:changeNote "New property added in DCAT 2.0."@en ;
  skos:changeNote "Nuova proprietà aggiunta in DCAT 2.0."@it ;
  skos:changeNote "Nová vlastnost přidaná ve verzi DCAT 2.0."@cs ;
  skos:changeNote "Nueva propiedad agregada en DCAT 2.0."@es ;
  skos:changeNote "Ny egenskab i DCAT 2.0."@da ;
  skos:definition "El fin del período."@es ;
  skos:definition "Konec doby trvání."@cs ;
  skos:definition "The end of the period."@en ;
  skos:definition "La fine del periodo."@it ;
  skos:definition "Slutningen på perioden."@da ;
  skos:scopeNote "El rango de esta propiedad es intencionalmente genérico con el propósito de permitir distintos niveles de precisión temporal para especificar el fin del período. Por ejemplo, puede expresarse como una fecha (xsd:date), una fecha y un tiempo (xsd:dateTime), o un año (xsd:gYear)."@es ;
  skos:scopeNote "Obor hodnot této vlastnosti je úmyslně obecný, aby umožnil různé úrovně časového rozlišení pro specifikaci konce doby trvání. Ten může být kupříkladu vyjádřen datumem (xsd:date), datumem a časem (xsd:dateTime) či rokem (xsd:gYear)."@cs ;
  skos:scopeNote "The range of this property is intentionally generic, with the purpose of allowing different level of temporal precision for specifying the end of a period. E.g., it can be expressed with a date (xsd:date), a date and time (xsd:dateTime), or a year (xsd:gYear)."@en ;
  skos:scopeNote "La range di questa proprietà è volutamente generico, con lo scopo di consentire diversi livelli di precisione temporale per specificare la fine di un periodo. Ad esempio, può essere espresso con una data (xsd:date), una data e un'ora (xsd:dateTime), o un anno (xsd:gYear)."@it ;
  skos:scopeNote "Rækkeviden for denne egenskab er bevidst generisk defineret med det formål at tillade forskellige niveauer af tidslig præcision ifm. angivelse af slutdatoen for en periode. Den kan eksempelvis udtrykkes som en dato (xsd:date), en dato og et tidspunkt (xsd:dateTime), eller et årstal (xsd:gYear)."@da ;
.
dcat:endpointDescription
  a owl:ObjectProperty ;
  rdfs:comment "A description of the service end-point, including its operations, parameters etc."@en ;
  rdfs:comment "Popis přístupového bodu služby včetně operací, parametrů apod."@cs ;
  rdfs:comment "Una descripción del end-point del servicio, incluyendo sus operaciones, parámetros, etc."@es ;
  rdfs:comment "Una descrizione dell'endpoint del servizio, incluse le sue operazioni, parametri, ecc."@it ;
  rdfs:comment "En beskrivelse af det pågældende tjenesteendpoint, inklusiv dets operationer, parametre etc."@da ;
  rdfs:domain dcat:DataService ;
  rdfs:label "descripción del end-point del servicio"@es ;
  rdfs:label "description of service end-point"@en ;
  rdfs:label "descrizione dell'endpoint del servizio"@it ;
  rdfs:label "popis přístupového bodu služby"@cs ;
  rdfs:label "endpointbeskrivelse"@da ;
  skos:changeNote "New property in DCAT 2.0."@en ;
  skos:changeNote "Nová vlastnost přidaná ve verzi DCAT 2.0."@cs ;
  skos:changeNote "Nueva propiedad agregada en DCAT 2.0."@en ;
  skos:changeNote "Nuova proprietà in DCAT 2.0."@it ;
  skos:changeNote "Ny egenskab i DCAT 2.0."@da ;
  skos:definition "A description of the service end-point, including its operations, parameters etc."@en ;
  skos:definition "Popis přístupového bodu služby včetně operací, parametrů apod."@cs ;
  skos:definition "Una descripción del end-point del servicio, incluyendo sus operaciones, parámetros, etc.."@es ;
  skos:definition "Una descrizione dell'endpoint del servizio, incluse le sue operazioni, parametri, ecc."@it ;
  skos:definition "En beskrivelse af det pågældende tjenesteendpoint, inklusiv dets operationer, parametre etc."@da ;
  skos:scopeNote "An endpoint description may be expressed in a machine-readable form, such as an OpenAPI (Swagger) description, an OGC GetCapabilities response, a SPARQL Service Description, an OpenSearch or WSDL document, a Hydra API description, else in text or some other informal mode if a formal representation is not possible."@en ;
  skos:scopeNote "La descripción del endpoint brinda detalles específicos de la instancia del endpoint, mientras que dct:conformsTo se usa para indicar el estándar general o especificación que implementa el endpoint."@es ;
  skos:scopeNote "La descrizione dell'endpoint fornisce dettagli specifici dell'istanza dell'endpoint reale, mentre dct:conformsTo viene utilizzato per indicare lo standard o le specifiche implementate dall'endpoint."@it ;
  skos:scopeNote "Popis přístupového bodu dává specifické detaily jeho konkrétní instance, zatímco dct:conformsTo indikuje obecný standard či specifikaci kterou přístupový bod implementuje."@cs ;
  skos:scopeNote "Popis přístupového bodu může být vyjádřen ve strojově čitelné formě, například jako popis OpenAPI (Swagger), odpověď služby OGC getCapabilities, pomocí slovníku SPARQL Service Description, jako OpenSearch či WSDL document, jako popis API dle slovníku Hydra, a nebo textově nebo jiným neformálním způsobem, pokud není možno použít formální reprezentaci."@cs ;
  skos:scopeNote "The endpoint description gives specific details of the actual endpoint instance, while dct:conformsTo is used to indicate the general standard or specification that the endpoint implements."@en ;
  skos:scopeNote "Una descripción del endpoint del servicio puede expresarse en un formato que la máquina puede interpretar, tal como una descripción basada en OpenAPI (Swagger), una respuesta OGC GetCapabilities, una descripción de un servicio SPARQL, un documento OpenSearch o WSDL, una descripción con la Hydra API, o en texto u otro modo informal si la representación formal no es posible."@es ;
  skos:scopeNote "Una descrizione dell'endpoint può essere espressa in un formato leggibile dalla macchina, come una descrizione OpenAPI (Swagger), una risposta GetCapabilities OGC, una descrizione del servizio SPARQL, un documento OpenSearch o WSDL, una descrizione API Hydra, o con del testo o qualche altra modalità informale se una rappresentazione formale non è possibile."@it ;
  skos:scopeNote "En beskrivelse af et endpoint kan udtrykkes i et maskinlæsbart format, såsom OpenAPI (Swagger)-beskrivelser, et OGC GetCapabilities svar, en SPARQL tjenestebeskrivelse, en OpenSearch- eller et WSDL-dokument, en Hydra-API-beskrivelse, eller i tekstformat eller i et andet uformelt format, hvis en formel repræsentation ikke er mulig."@da ;
  skos:scopeNote "Endpointbeskrivelsen giver specifikke oplysninger om den konkrete endpointinstans, mens dct:conformsTo anvendes til at indikere den overordnede standard eller specifikation som endpointet er i overensstemmelse med."@da ;
.
dcat:endpointURL
  a owl:ObjectProperty ;
  rdfs:comment "Kořenové umístění nebo hlavní přístupový bod služby (IRI přístupné přes Web)."@cs ;
  rdfs:comment "La locazione principale o l'endpoint primario del servizio (un IRI risolvibile via web)."@it ;
  rdfs:comment "La posición raíz o end-point principal del servicio (una IRI web)."@es ;
  rdfs:comment "The root location or primary endpoint of the service (a web-resolvable IRI)."@en ;
  rdfs:comment "Rodplaceringen eller det primære endpoint for en tjeneste (en web-resolverbar IRI)."@da ;
  rdfs:domain dcat:DataService ;
  rdfs:label "end-point del servicio"@es ;
  rdfs:label "end-point del servizio"@it ;
  rdfs:label "přístupový bod služby"@cs ;
  rdfs:label "service end-point"@en ;
  rdfs:label "tjenesteendpoint"@da ;
  rdfs:range rdfs:Resource ;
  skos:changeNote "New property in DCAT 2.0."@en ;
  skos:changeNote "Nová vlastnost přidaná ve verzi DCAT 2.0."@cs ;
  skos:changeNote "Nueva propiedad agregada en DCAT 2.0."@es ;
  skos:changeNote "Nuova proprietà in DCAT 2.0."@it ;
  skos:definition "Kořenové umístění nebo hlavní přístupový bod služby (IRI přístupné přes Web)."@cs ;
  skos:definition "La locazione principale o l'endpoint primario del servizio (un IRI risolvibile via web)."@it ;
  skos:definition "La posición raíz o end-point principal del servicio (una IRI web)."@es ;
  skos:definition "The root location or primary endpoint of the service (a web-resolvable IRI)."@en ;
  skos:definition "Rodplaceringen eller det primære endpoint for en tjeneste (en web-resolverbar IRI)."@da ;
.
dcat:hadRole
  a owl:ObjectProperty ;
  rdfs:comment "Funkce entity či agenta ve vztahu k jiné entitě či zdroji."@cs ;
  rdfs:comment "La función de una entidad o agente con respecto a otra entidad o recurso."@es ;
  rdfs:comment "La funzione di un'entità o un agente rispetto ad un'altra entità o risorsa."@it ;
  rdfs:comment "The function of an entity or agent with respect to another entity or resource."@en ;
  rdfs:comment "Den funktion en entitet eller aktør har i forhold til en anden ressource."@da ;
  rdfs:domain [
      a owl:Class ;
      owl:unionOf (
          prov:Attribution
          dcat:Relationship
        ) ;
    ] ;
  rdfs:label "haRuolo"@it ;
  rdfs:label "hadRole"@en ;
  rdfs:label "sehraná role"@cs ;
  rdfs:label "tiene rol"@it ;
  rdfs:label "havde rolle"@da ;
  rdfs:range dcat:Role ;
  skos:changeNote "New property added in DCAT 2.0."@en ;
  skos:changeNote "Nová vlastnost přidaná ve verzi DCAT 2.0."@cs ;
  skos:changeNote "Nueva propiedad agregada en DCAT 2.0."@es ;
  skos:changeNote "Nuova proprietà aggiunta in DCAT 2.0."@it ;
  skos:definition "Funkce entity či agenta ve vztahu k jiné entitě či zdroji."@cs ;
  skos:definition "La función de una entidad o agente con respecto a otra entidad o recurso."@es ;
  skos:definition "La funzione di un'entità o un agente rispetto ad un'altra entità o risorsa."@it ;
  skos:definition "The function of an entity or agent with respect to another entity or resource."@en ;
  skos:definition "Den funktion en entitet eller aktør har i forhold til en anden ressource."@da ;
  skos:editorialNote "Agregada en DCAT para complementar prov:hadRole (cuyo uso está limitado a roles en el contexto de una actividad, con dominio prov:Association."@es ;
  skos:editorialNote "Introdotta in DCAT per completare prov:hadRole (il cui uso è limitato ai ruoli nel contesto di un'attività, con il dominio di prov:Association."@it ;
  skos:editorialNote "Introduced into DCAT to complement prov:hadRole (whose use is limited to roles in the context of an activity, with the domain of prov:Association."@en ;
  skos:editorialNote "Přidáno do DCAT pro doplnění vlastnosti prov:hadRole (jejíž užití je omezeno na role v kontextu aktivity, s definičním oborem prov:Association)."@cs ;
  skos:editorialNote "Introduceret i DCAT for at supplere prov:hadRole (hvis anvendelse er begrænset til roller i forbindelse med en aktivitet med domænet prov:Association)."@da ;
  skos:scopeNote "May be used in a qualified-attribution to specify the role of an Agent with respect to an Entity. It is recommended that the value be taken from a controlled vocabulary of agent roles, such as http://registry.it.csiro.au/def/isotc211/CI_RoleCode."@en ;
  skos:scopeNote "May be used in a qualified-relation to specify the role of an Entity with respect to another Entity.  It is recommended that the value be taken from a controlled vocabulary of entity roles such as: ISO 19115 DS_AssociationTypeCode http://registry.it.csiro.au/def/isotc211/DS_AssociationTypeCode; IANA Registry of Link Relations https://www.iana.org/assignments/link-relation; DataCite metadata schema; MARC relators https://id.loc.gov/vocabulary/relators."@en ;
  skos:scopeNote "Může být použito v kvalifikovaném přiřazení pro specifikaci role Agenta ve vztahu k Entitě. Je doporučeno hodnotu vybrat z řízeného slovníku rolí agentů, jako například http://registry.it.csiro.au/def/isotc211/CI_RoleCode."@cs ;
  skos:scopeNote "Může být použito v kvalifikovaném vztahu pro specifikaci role Entity ve vztahu k jiné Entitě. Je doporučeno použít hodnotu z řízeného slovníku rolí entit, jako například ISO 19115 DS_AssociationTypeCode http://registry.it.csiro.au/def/isotc211/DS_AssociationTypeCode, IANA Registry of Link Relations https://www.iana.org/assignments/link-relation, DataCite metadata schema, MARC relators https://id.loc.gov/vocabulary/relators."@cs ;
  skos:scopeNote "Puede usarse en una atribución cualificada para especificar el rol de un Agente con respecto a una Entidad. Se recomienda que el valor sea de un vocabulario controlado de roles de agentes, como por ejemplo http://registry.it.csiro.au/def/isotc211/CI_RoleCode."@es ;
  skos:scopeNote "Puede usarse en una atribución cualificada para especificar el rol de una Entidad con respecto a otra Entidad. Se recomienda que su valor se tome de un vocabulario controlado de roles de entidades como por ejemplo: ISO 19115 DS_AssociationTypeCode http://registry.it.csiro.au/def/isotc211/DS_AssociationTypeCode; IANA Registry of Link Relations https://www.iana.org/assignments/link-relation; esquema de metadatos de DataCite; MARC relators https://id.loc.gov/vocabulary/relators."@es ;
  skos:scopeNote "Può essere utilizzata in una relazione qualificata per specificare il ruolo di un'entità rispetto a un'altra entità. Si raccomanda che il valore sia preso da un vocabolario controllato di ruoli di entità come ISO 19115 DS_AssociationTypeCode http://registry.it.csiro.au/def/isotc211/DS_AssociationTypeCode, IANA Registry of Link Relations https://www.iana.org/assignments/link-relation, DataCite metadata schema, o MARC relators https://id.loc.gov/vocabulary/relators."@it ;
  skos:scopeNote "Può essere utilizzato in un'attribuzione qualificata per specificare il ruolo di un agente rispetto a un'entità. Si raccomanda che il valore sia preso da un vocabolario controllato di ruoli di agente, come ad esempio http://registry.it.csiro.au/def/isotc211/CI_RoleCode."@it ;
  skos:scopeNote "Kan vendes ved kvalificerede krediteringer til at angive en aktørs rolle i forhold en entitet. Det anbefales at værdierne styres som et kontrolleret udfaldsrum med aktørroller, såsom http://registry.it.csiro.au/def/isotc211/CI_RoleCode."@da ;
.
dcat:keyword
  a rdf:Property ;
  a owl:DatatypeProperty ;
  rdfs:comment "A keyword or tag describing a resource."@en ;
  rdfs:comment "Klíčové slovo nebo značka popisující zdroj."@cs ;
  rdfs:comment "Un mot-clé ou étiquette décrivant une ressource."@fr ;
  rdfs:comment "Una palabra clave o etiqueta que describe un recurso."@es ;
  rdfs:comment "Una parola chiave o un'etichetta per descrivere la risorsa."@it ;
  rdfs:comment "Μία λέξη-κλειδί ή μία ετικέτα που περιγράφει το σύνολο δεδομένων."@el ;
  rdfs:comment "كلمة  مفتاحيه توصف قائمة البيانات"@ar ;
  rdfs:comment "データセットを記述しているキーワードまたはタグ。"@ja ;
  rdfs:comment "Et nøgleord eller tag til beskrivelse af en ressource."@da ;
  rdfs:isDefinedBy <http://www.w3.org/TR/vocab-dcat/> ;
  rdfs:label "keyword"@en ;
  rdfs:label "klíčové slovo"@cs ;
  rdfs:label "mot-clés "@fr ;
  rdfs:label "palabra clave"@es ;
  rdfs:label "parola chiave"@it ;
  rdfs:label "λέξη-κλειδί"@el ;
  rdfs:label "كلمة  مفتاحية "@ar ;
  rdfs:label "キーワード/タグ"@ja ;
  rdfs:label "nøgleord"@da ;
  rdfs:range rdfs:Literal ;
  rdfs:subPropertyOf dct:subject ;
  skos:definition "A keyword or tag describing a resource."@en ;
  skos:definition "Klíčové slovo nebo značka popisující zdroj."@cs ;
  skos:definition "Un mot-clé ou étiquette décrivant une ressource."@fr ;
  skos:definition "Una palabra clave o etiqueta que describe un recurso."@es ;
  skos:definition "Una parola chiave o un'etichetta per descrivere la risorsa."@it ;
  skos:definition "Μία λέξη-κλειδί ή μία ετικέτα που περιγράφει το σύνολο δεδομένων."@el ;
  skos:definition "كلمة  مفتاحيه توصف قائمة البيانات"@ar ;
  skos:definition "データセットを記述しているキーワードまたはタグ。"@ja ;
  skos:definition "Et nøgleord eller tag til beskrivelse af en ressource."@da ;
.
dcat:landingPage
  a rdf:Property ;
  a owl:ObjectProperty ;
  rdfs:comment "A Web page that can be navigated to in a Web browser to gain access to the catalog, a dataset, its distributions and/or additional information."@en ;
  rdfs:comment "Una pagina web che può essere navigata per ottenere l'accesso al catalogo, ad un dataset, alle distribuzioni del dataset e/o ad informazioni addizionali."@it ;
  rdfs:comment "Una página web que puede ser visitada en un explorador Web para tener acceso el catálogo, un conjunto de datos, sus distribuciones y/o información adicional."@es ;
  rdfs:comment "Une page Web accessible par un navigateur Web donnant accès au catalogue, un jeu de données, ses distributions et/ou des informations additionnelles."@fr ;
  rdfs:comment "Webová stránka, na kterou lze pro získání přístupu ke katalogu, datové sadě, jejím distribucím a/nebo dalším informacím přistoupit webovým prohlížečem."@cs ;
  rdfs:comment "Μία ιστοσελίδα πλοηγίσιμη μέσω ενός φυλλομετρητή (Web browser) που δίνει πρόσβαση στο σύνολο δεδομένων, τις διανομές αυτού ή/και επιπρόσθετες πληροφορίες."@el ;
  rdfs:comment "صفحة وب يمكن من خلالها الوصول الى قائمة البيانات أو إلى معلومات إضافية متعلقة بها "@ar ;
  rdfs:comment "データセット、その配信および（または）追加情報にアクセスするためにウエブ・ブラウザでナビゲートできるウェブページ。"@ja ;
  rdfs:comment "En webside som der kan navigeres til i en webbrowser for at få adgang til kataloget, et datasæt, dets distributioner og/eller yderligere information."@da ;
  rdfs:isDefinedBy <http://www.w3.org/TR/vocab-dcat/> ;
  rdfs:label "landing page"@en ;
  rdfs:label "page d'atterrissage"@fr ;
  rdfs:label "pagina di destinazione"@it ;
  rdfs:label "página de destino"@es ;
  rdfs:label "vstupní stránka"@cs ;
  rdfs:label "ιστοσελίδα αρχικής πρόσβασης"@el ;
  rdfs:label "صفحة وصول"@ar ;
  rdfs:label "ランディング・ページ"@ja ;
  rdfs:label "destinationsside"@da ;
  rdfs:range foaf:Document ;
  rdfs:subPropertyOf foaf:page ;
  skos:definition "A Web page that can be navigated to in a Web browser to gain access to the catalog, a dataset, its distributions and/or additional information."@en ;
  skos:definition "Una pagina web che può essere navigata per ottenere l'accesso al catalogo, ad un dataset, alle distribuzioni del dataset e/o ad informazioni addizionali."@it ;
  skos:definition "Una página web que puede ser visitada en un explorador Web para tener acceso el catálogo, un conjunto de datos, sus distribuciones y/o información adicional."@es ;
  skos:definition "Une page Web accessible par un navigateur Web donnant accès au catalogue, un jeu de données, ses distributions et/ou des informations additionnelles."@fr ;
  skos:definition "Webová stránka, na kterou lze pro získání přístupu ke katalogu, datové sadě, jejím distribucím a/nebo dalším informacím přistoupit webovým prohlížečem."@cs ;
  skos:definition "Μία ιστοσελίδα πλοηγίσιμη μέσω ενός φυλλομετρητή (Web browser) που δίνει πρόσβαση στο σύνολο δεδομένων, τις διανομές αυτού ή/και επιπρόσθετες πληροφορίες."@el ;
  skos:definition "صفحة وب يمكن من خلالها الوصول الى قائمة البيانات أو إلى معلومات إضافية متعلقة بها "@ar ;
  skos:definition "データセット、その配信および（または）追加情報にアクセスするためにウエブ・ブラウザでナビゲートできるウェブページ。"@ja ;
  skos:definition "En webside som en webbrowser kan navigeres til for at få adgang til kataloget, et datasæt, dets distritbutioner og/eller yderligere information."@da ;
  skos:scopeNote "If the distribution(s) are accessible only through a landing page (i.e. direct download URLs are not known), then the landing page link should be duplicated as accessURL on a distribution."@en ;
  skos:scopeNote "Pokud je distribuce dostupná pouze přes vstupní stránku, t.j. přímý URL odkaz ke stažení není znám, URL přístupové stránky by mělo být duplikováno ve vlastnosti distribuce accessURL."@cs ;
  skos:scopeNote "Se la distribuzione è accessibile solo attraverso una pagina di destinazione (cioè, un URL di download diretto non è noto), il link alla pagina di destinazione deve essere duplicato come accessURL sulla distribuzione."@it ;
  skos:scopeNote "Si la distribución es accesible solamente través de una página de aterrizaje (i.e., no se conoce una URL de descarga directa), entonces el enlance a la página de aterrizaje debe ser duplicado como accessURL sobre la distribución."@es ;
  skos:scopeNote "Si la distribution est seulement accessible à travers une page d'atterrissage (exple. pas de connaissance d'URLS de téléchargement direct ), alors le lien de la page d'atterrissage doit être dupliqué comme accessURL sur la distribution."@fr ;
  skos:scopeNote "Αν η/οι διανομή/ές είναι προσβάσιμη/ες μόνο μέσω μίας ιστοσελίδας αρχικής πρόσβασης (δηλαδή αν δεν υπάρχουν γνωστές διευθύνσεις άμεσης μεταφόρτωσης), τότε ο σύνδεσμος της ιστοσελίδας αρχικής πρόσβασης πρέπει να αναπαραχθεί ως accessURL σε μία διανομή."@el ;
  skos:scopeNote "ランディング・ページを通じてしか配信にアクセスできない場合（つまり、直接的なダウンロードURLが不明）には、配信におけるaccessURLとしてランディング・ページのリンクをコピーすべきです（SHOULD）。"@ja ;
  skos:scopeNote "Hvis en eller flere distributioner kun er tilgængelige via en destinationsside (dvs. en URL til direkte download er ikke kendt), så bør destinationssidelinket gentages som adgangsadresse for en distribution."@da ;
.
dcat:mediaType
  a rdf:Property ;
  a owl:ObjectProperty ;
  rdfs:comment "Cette propriété doit être utilisée quand c'est définit le type de média de la distribution en IANA, sinon dct:format DOIT être utilisé avec différentes valeurs."@fr ;
  rdfs:comment "Esta propiedad debe ser usada cuando está definido el tipo de media de la distribución en IANA, de otra manera dct:format puede ser utilizado con diferentes valores"@es ;
  rdfs:comment "Il tipo di media della distribuzione come definito da IANA"@it ;
  rdfs:comment "The media type of the distribution as defined by IANA"@en ;
  rdfs:comment "Typ média distribuce definovaný v IANA."@cs ;
  rdfs:comment "Η ιδιότητα αυτή ΘΑ ΠΡΕΠΕΙ να χρησιμοποιείται όταν ο τύπος μέσου μίας διανομής είναι ορισμένος στο IANA, αλλιώς η ιδιότητα dct:format ΔΥΝΑΤΑΙ να χρησιμοποιηθεί με διαφορετικές τιμές."@el ;
  rdfs:comment "يجب استخدام هذه الخاصية إذا كان نوع الملف معرف ضمن IANA"@ar ;
  rdfs:comment "このプロパティーは、配信のメディア・タイプがIANAで定義されているときに使用すべきで（SHOULD）、そうでない場合には、dct:formatを様々な値と共に使用できます（MAY）。"@ja ;
  rdfs:comment "Medietypen for distributionen som den er defineret af IANA."@da ;
  rdfs:domain dcat:Distribution ;
  rdfs:isDefinedBy <http://www.w3.org/TR/vocab-dcat/> ;
  rdfs:label "media type"@en ;
  rdfs:label "tipo de media"@es ;
  rdfs:label "tipo di media"@it ;
  rdfs:label "typ média"@cs ;
  rdfs:label "type de média"@fr ;
  rdfs:label "τύπος μέσου"@el ;
  rdfs:label "نوع الميديا"@ar ;
  rdfs:label "メディア・タイプ"@ja ;
  rdfs:label "medietype"@da ;
  rdfs:range dct:MediaType ;
  rdfs:subPropertyOf dct:format ;
  skos:changeNote "Obor hodnot dcat:mediaType byl zúžen v této revizi DCAT."@cs ;
  skos:changeNote "The range of dcat:mediaType has been tightened as part of the revision of DCAT."@en ;
  skos:changeNote "Il range di dcat:mediaType è stato ristretto  come parte della revisione di DCAT."@it ;
  skos:definition "Cette propriété doit être utilisée quand c'est définit le type de média de la distribution en IANA, sinon dct:format DOIT être utilisé avec différentes valeurs."@fr ;
  skos:definition "Esta propiedad debe ser usada cuando está definido el tipo de media de la distribución en IANA, de otra manera dct:format puede ser utilizado con diferentes valores."@es ;
  skos:definition "Il tipo di media della distribuzione come definito da IANA."@it ;
  skos:definition "The media type of the distribution as defined by IANA."@en ;
  skos:definition "Typ média distribuce definovaný v IANA."@cs ;
  skos:definition "Η ιδιότητα αυτή ΘΑ ΠΡΕΠΕΙ να χρησιμοποιείται όταν ο τύπος μέσου μίας διανομής είναι ορισμένος στο IANA, αλλιώς η ιδιότητα dct:format ΔΥΝΑΤΑΙ να χρησιμοποιηθεί με διαφορετικές τιμές."@el ;
  skos:definition "يجب استخدام هذه الخاصية إذا كان نوع الملف معرف ضمن IANA"@ar ;
  skos:definition "このプロパティーは、配信のメディア・タイプがIANAで定義されているときに使用すべきで（SHOULD）、そうでない場合には、dct:formatを様々な値と共に使用できます（MAY）。"@ja ;
  skos:definition "Medietypen for distributionen som den er defineret af IANA."@da ;
  skos:editorialNote "Status: English Definition text modified by DCAT revision team, Italian and Czech translation provided, other translations pending. Note some inconsistency on def vs. usage."@en ;
  skos:scopeNote "Esta propiedad DEBERÍA usarse cuando el 'media type' de la distribución está definido en el registro IANA de 'media types' https://www.iana.org/assignments/media-types/, de lo contrario, dct:format PUEDE usarse con distintos valores."@es ;
  skos:scopeNote "Questa proprietà DEVE essere usata quando il tipo di media della distribuzione è definito nel registro dei tipi di media IANA https://www.iana.org/assignments/media-types/, altrimenti dct:format PUO 'essere usato con differenti valori."@it ;
  skos:scopeNote "Tato vlastnost BY MĚLA být použita, je-li typ média distribuce definován v registru IANA https://www.iana.org/assignments/media-types/. V ostatních případech MŮŽE být použita vlastnost dct:format s jinými hodnotami."@cs ;
  skos:scopeNote "This property SHOULD be used when the media type of the distribution is defined in the IANA media types registry https://www.iana.org/assignments/media-types/, otherwise dct:format MAY be used with different values."@en ;
  skos:scopeNote "Denne egenskab BØR anvendes hvis distributionens medietype optræder i 'IANA media types registry' https://www.iana.org/assignments/media-types/, ellers KAN egenskaben dct:format anvendes med et andet udfaldsrum."@da ;
.
dcat:packageFormat
  a rdf:Property ;
  a owl:ObjectProperty ;
  rdfs:comment "Balíčkový formát souboru, ve kterém je jeden či více souborů seskupeno dohromady, např. aby bylo možné stáhnout sadu souvisejících souborů naráz."@cs ;
  rdfs:comment "El formato del archivo en que se agrupan uno o más archivos de datos, e.g. para permitir que un conjunto de archivos relacionados se bajen juntos."@es ;
  rdfs:comment "Il formato di impacchettamento della distribuzione in cui uno o più file di dati sono raggruppati insieme, ad es. per abilitare un insieme di file correlati da scaricare insieme."@it ;
  rdfs:comment "The package format of the distribution in which one or more data files are grouped together, e.g. to enable a set of related files to be downloaded together."@en ;
  rdfs:comment "Format til pakning af data med henblik på distribution af en eller flere relaterede datafiler der samles til en enhed med henblik på samlet distribution. "@da ;
  rdfs:domain dcat:Distribution ;
  rdfs:isDefinedBy <https://www.w3.org/TR/vocab-dcat-2/> ;
  rdfs:label "formato de empaquetado"@es ;
  rdfs:label "formato di impacchettamento"@it ;
  rdfs:label "formát balíčku"@cs ;
  rdfs:label "packaging format"@en ;
  rdfs:label "pakkeformat"@da ;
  rdfs:range dct:MediaType ;
  rdfs:subPropertyOf dct:format ;
  skos:changeNote "New property added in DCAT 2.0."@en ;
  skos:changeNote "Nová vlastnost přidaná ve verzi DCAT 2.0."@cs ;
  skos:changeNote "Nueva propiedad agregada en DCAT 2.0."@es ;
  skos:changeNote "Nuova proprietà aggiunta in DCAT 2.0."@it ;
  skos:changeNote "Ny egenskab tilføjet i DCAT 2.0."@da ;
  skos:definition "Balíčkový formát souboru, ve kterém je jeden či více souborů seskupeno dohromady, např. aby bylo možné stáhnout sadu souvisejících souborů naráz."@cs ;
  skos:definition "El formato del archivo en que se agrupan uno o más archivos de datos, e.g. para permitir que un conjunto de archivos relacionados se bajen juntos."@es ;
  skos:definition "Il formato di impacchettamento della distribuzione in cui uno o più file di dati sono raggruppati insieme, ad es. per abilitare un insieme di file correlati da scaricare insieme."@it ;
  skos:definition "The package format of the distribution in which one or more data files are grouped together, e.g. to enable a set of related files to be downloaded together."@en ;
  skos:scopeNote "Esta propiedad se debe usar cuando los archivos de la distribución están empaquetados, por ejemplo en un archivo TAR, Frictionless Data Package o Bagit. El formato DEBERÍA expresarse usando un 'media type', tales como los definidos en el registro IANA de 'media types' https://www.iana.org/assignments/media-types/, si está disponibles."@es ;
  skos:scopeNote "Questa proprietà deve essere utilizzata quando i file nella distribuzione sono impacchettati, ad esempio in un file TAR, Frictionless Data Package o Bagit. Il formato DOVREBBE essere espresso utilizzando un tipo di supporto come definito dal registro dei tipi di media IANA https://www.iana.org/assignments/media-types/, se disponibili."@it ;
  skos:scopeNote "Tato vlastnost se použije, když jsou soubory v distribuci zabaleny, např. v souboru TAR, v balíčku Frictionless Data Package nebo v souboru Bagit. Formát BY MĚL být vyjádřen pomocí typu média definovaného v registru IANA https://www.iana.org/assignments/media-types/, pokud existuje."@cs ;
  skos:scopeNote "This property to be used when the files in the distribution are packaged, e.g. in a TAR file, a Frictionless Data Package or a Bagit file. The format SHOULD be expressed using a media type as defined by IANA media types registry https://www.iana.org/assignments/media-types/, if available."@en ;
  skos:scopeNote "Denne egenskab kan anvendes hvis filerne i en distribution er pakket, fx i en TAR-fil, en Frictionless Data Package eller en Bagit-fil. Formatet BØR udtrykkes ved en medietype som defineret i 'IANA media types registry', hvis der optræder en relevant medietype dér: https://www.iana.org/assignments/media-types/."@da ;
.
dcat:qualifiedRelation
  a owl:ObjectProperty ;
  rdfs:comment "Enlace a una descripción de la relación con otro recurso."@es ;
  rdfs:comment "Link a una descrizione di una relazione con un'altra risorsa."@it ;
  rdfs:comment "Link to a description of a relationship with another resource."@en ;
  rdfs:comment "Odkaz na popis vztahu s jiným zdrojem."@cs ;
  rdfs:comment "Reference til en beskrivelse af en relation til en anden ressource."@da ;
  rdfs:domain dcat:Resource ;
  rdfs:label "kvalifikovaný vztah"@cs ;
  rdfs:label "qualified relation"@en ;
  rdfs:label "relación calificada"@es ;
  rdfs:label "relazione qualificata"@it ;
  rdfs:label "Kvalificeret relation"@da ;
  rdfs:range dcat:Relationship ;
  skos:changeNote "New property added in DCAT 2.0."@en ;
  skos:changeNote "Nová vlastnost přidaná ve verzi DCAT 2.0."@cs ;
  skos:changeNote "Nuova proprietà aggiunta in DCAT 2.0."@it ;
  skos:changeNote "Propiedad nueva añadida en DCAT 2.0."@es ;
  skos:changeNote "Ny egenskab tilføjet i DCAT 2.0."@da ;
  skos:definition "Enlace a una descripción de la relación con otro recurso."@es ;
  skos:definition "Link a una descrizione di una relazione con un'altra risorsa."@it ;
  skos:definition "Link to a description of a relationship with another resource."@en ;
  skos:definition "Odkaz na popis vztahu s jiným zdrojem."@cs ;
  skos:definition "Reference til en beskrivelse af en relation til en anden ressource."@da ;
  skos:editorialNote "Introdotta in DCAT per integrare le altre relazioni qualificate di PROV."@it ;
  skos:editorialNote "Introduced into DCAT to complement the other PROV qualified relations. "@en ;
  skos:editorialNote "Přidáno do DCAT k doplnění jiných kvalifikovaných vztahů ze slovníku PROV."@cs ;
  skos:editorialNote "Se incluyó en DCAT para complementar las relaciones calificadas disponibles en PROV."@es ;
  skos:editorialNote "Introduceret i DCAT med henblik på at supplere de øvrige kvalificerede relationer fra PROV. "@da ;
  skos:scopeNote "Použito pro odkazování na jiný zdroj, kde druh vztahu je znám, ale neodpovídá standardním vlastnostem ze slovníku Dublin Core (dct:hasPart, dct:isPartOf, dct:conformsTo, dct:isFormatOf, dct:hasFormat, dct:isVersionOf, dct:hasVersion, dct:replaces, dct:isReplacedBy, dct:references, dct:isReferencedBy, dct:requires, dct:isRequiredBy) či slovníku PROV-O (prov:wasDerivedFrom, prov:wasInfluencedBy, prov:wasQuotedFrom, prov:wasRevisionOf, prov:hadPrimarySource, prov:alternateOf, prov:specializationOf)."@cs ;
  skos:scopeNote "Se usa para asociar con otro recurso para el cuál la naturaleza de la relación es conocida pero no es ninguna de las propiedades que provee el estándar Dublin Core (dct:hasPart, dct:isPartOf, dct:conformsTo, dct:isFormatOf, dct:hasFormat, dct:isVersionOf, dct:hasVersion, dct:replaces, dct:isReplacedBy, dct:references, dct:isReferencedBy, dct:requires, dct:isRequiredBy) or PROV-O properties (prov:wasDerivedFrom, prov:wasInfluencedBy, prov:wasQuotedFrom, prov:wasRevisionOf, prov:hadPrimarySource, prov:alternateOf, prov:specializationOf)."@es ;
  skos:scopeNote "Used to link to another resource where the nature of the relationship is known but does not match one of the standard Dublin Core properties (dct:hasPart, dct:isPartOf, dct:conformsTo, dct:isFormatOf, dct:hasFormat, dct:isVersionOf, dct:hasVersion, dct:replaces, dct:isReplacedBy, dct:references, dct:isReferencedBy, dct:requires, dct:isRequiredBy) or PROV-O properties (prov:wasDerivedFrom, prov:wasInfluencedBy, prov:wasQuotedFrom, prov:wasRevisionOf, prov:hadPrimarySource, prov:alternateOf, prov:specializationOf)."@en ;
  skos:scopeNote "Viene utilizzato per associarsi a un'altra risorsa nei casi per i quali la natura della relazione è nota ma non è alcuna delle proprietà fornite dallo standard Dublin Core (dct:hasPart, dct:isPartOf, dct:conformsTo, dct:isFormatOf, dct:hasFormat , dct:isVersionOf, dct:hasVersion, dct:replaces, dct:isReplacedBy, dct:references, dct:isReferencedBy, dct:require, dct:isRequiredBy) o dalle proprietà fornite da PROV-O (prov:wasDerivedFrom, prov:wasInfluencedBy, prov:wasQuotedFrom , prov:wasRevisionOf, prov:hadPrimarySource, prov:alternateOf, prov:specializationOf)."@it ;
  skos:scopeNote "Anvendes til at referere til en anden ressource hvor relationens betydning er kendt men ikke matcher en af de standardiserede egenskaber fra Dublin Core (dct:hasPart, dct:isPartOf, dct:conformsTo, dct:isFormatOf, dct:hasFormat, dct:isVersionOf, dct:hasVersion, dct:replaces, dct:isReplacedBy, dct:references, dct:isReferencedBy, dct:requires, dct:isRequiredBy) eller PROV-O-egenskaber (prov:wasDerivedFrom, prov:wasInfluencedBy, prov:wasQuotedFrom, prov:wasRevisionOf, prov:hadPrimarySource, prov:alternateOf, prov:specializationOf)."@da ;
.
dcat:record
  a rdf:Property ;
  a owl:ObjectProperty ;
  rdfs:comment "A record describing the registration of a single dataset or data service that is part of the catalog."@en ;
  rdfs:comment "Describe la registración de un conjunto de datos o un servicio de datos en el catálogo."@es ;
  rdfs:comment "Propojuje katalog a jeho záznamy."@cs ;
  rdfs:comment "Relie un catalogue à ses registres."@fr ;
  rdfs:comment "Un record che descrive la registrazione di un singolo set di dati o di un servizio dati che fa parte del catalogo."@it ;
  rdfs:comment "Záznam popisující registraci jedné datové sady či datové služby jakožto součásti katalogu."@cs ;
  rdfs:comment "Συνδέει έναν κατάλογο με τις καταγραφές του."@el ;
  rdfs:comment "تربط الفهرس بسجل ضمنه"@ar ;
  rdfs:comment "カタログの一部であるカタログ・レコード。"@ja ;
  rdfs:comment "En post der beskriver registreringen af et enkelt datasæt eller en datatjeneste som er opført i kataloget."@da ;
  rdfs:domain dcat:Catalog ;
  rdfs:isDefinedBy <http://www.w3.org/TR/vocab-dcat/> ;
  rdfs:label "record"@en ;
  rdfs:label "record"@it ;
  rdfs:label "registre"@fr ;
  rdfs:label "registro"@es ;
  rdfs:label "záznam"@cs ;
  rdfs:label "καταγραφή"@el ;
  rdfs:label "سجل"@ar ;
  rdfs:label "カタログ・レコード"@ja ;
  rdfs:label "post"@da ;
  skos:altLabel "har post"@da ;
  rdfs:range dcat:CatalogRecord ;
  skos:definition "A record describing the registration of a single dataset or data service that is part of the catalog."@en ;
  skos:definition "Describe la registración de un conjunto de datos o un servicio de datos en el catálogo."@es ;
  skos:definition "Propojuje katalog a jeho záznamy."@cs ;
  skos:definition "Relie un catalogue à ses registres."@fr ;
  skos:definition "Un record che descrive la registrazione di un singolo set di dati o di un servizio dati che fa parte del catalogo."@it ;
  skos:definition "Záznam popisující registraci jedné datové sady či datové služby jakožto součásti katalogu."@cs ;
  skos:definition "Συνδέει έναν κατάλογο με τις καταγραφές του."@el ;
  skos:definition "تربط الفهرس بسجل ضمنه"@ar ;
  skos:definition "カタログの一部であるカタログ・レコード。"@ja ;
  skos:definition "En post der beskriver registreringen af et enkelt datasæt eller en datatjeneste som er opført i kataloget."@da ;
  skos:editorialNote "Status: English, Italian, Spanish and Czech Definitions modified by DCAT revision team, other translations pending."@en ;
.
dcat:servesDataset
  a owl:ObjectProperty ;
  rdfs:comment "A collection of data that this DataService can distribute."@en ;
  rdfs:comment "Kolekce dat, kterou je tato Datová služba schopna poskytnout."@cs ;
  rdfs:comment "Una colección de datos que este Servicio de Datos puede distribuir."@es ;
  rdfs:comment "Una raccolta di dati che questo DataService può distribuire."@it ;
  rdfs:comment "En samling af data som denne datatjeneste kan distribuere."@da ;
  rdfs:domain dcat:DataService ;
  rdfs:label "poskytuje datovou sadu"@cs ;
  rdfs:label "provee conjunto de datos"@es ;
  rdfs:label "serve set di dati"@it ;
  rdfs:label "serves dataset"@en ;
  rdfs:label "datatjeneste for datasæt"@da ;
  skos:altLabel "distribuerer"@da ;
  skos:altLabel "udstiller"@da ;
  skos:altLabel "ekspederer"@da ;
  rdfs:range dcat:Dataset ;
  skos:changeNote "New property in DCAT 2.0."@en ;
  skos:changeNote "Nová vlastnost přidaná ve verzi DCAT 2.0."@cs ;
  skos:changeNote "Nueva propiedad agregada en DCAT 2.0."@es ;
  skos:changeNote "Nuova proprietà in DCAT 2.0."@it ;
  skos:definition "A collection of data that this DataService can distribute."@en ;
  skos:definition "Kolekce dat, kterou je tato Datová služba schopna poskytnout."@cs ;
  skos:definition "Una colección de datos que este Servicio de Datos puede distribuir."@es ;
  skos:definition "Una raccolta di dati che questo DataService può distribuire."@it ;
  skos:definition "En samling af data som denne datatjeneste kan distribuere."@da ;
.
dcat:service
  a owl:ObjectProperty ;
  rdfs:comment "A site or endpoint that is listed in the catalog."@en ;
  rdfs:comment "Umístění či přístupový bod registrovaný v katalogu."@cs ;
  rdfs:comment "Un sitio o 'endpoint' que está listado en el catálogo."@es ;
  rdfs:comment "Un sito o endpoint elencato nel catalogo."@it ;
  rdfs:comment "Et websted eller et endpoint som er opført i kataloget."@da ;
  rdfs:domain dcat:Catalog ;
  rdfs:label "service"@en ;
  rdfs:label "servicio"@es ;
  rdfs:label "servizio"@it ;
  rdfs:label "služba"@cs ;
  rdfs:label "datatjeneste"@da ;
  skos:altLabel "har datatjeneste"@da ;
  rdfs:range dcat:DataService ;
  rdfs:subPropertyOf dct:hasPart ;
  rdfs:subPropertyOf rdfs:member ;
  skos:changeNote "New property added in DCAT 2.0."@en ;
  skos:changeNote "Nová vlastnost přidaná ve verzi DCAT 2.0."@cs ;
  skos:changeNote "Nueva propiedad añadida en DCAT 2.0."@es ;
  skos:changeNote "Nuova proprietà aggiunta in DCAT 2.0."@it ;
  skos:definition "A site or endpoint that is listed in the catalog."@en ;
  skos:definition "Umístění či přístupový bod registrovaný v katalogu."@cs ;
  skos:definition "Un sitio o 'endpoint' que está listado en el catálogo."@es ;
  skos:definition "Un sito o endpoint elencato nel catalogo."@it ;
  skos:definition "Et websted eller et endpoint som er opført i kataloget."@da ;
.
dcat:spatialResolutionInMeters
  a owl:DatatypeProperty ;
  rdfs:comment "minimum spatial separation resolvable in a dataset, measured in meters."@en-US ;
  rdfs:comment "minimum spatial separation resolvable in a dataset, measured in metres."@en-GB ;
  rdfs:comment "minimální prostorový rozestup rozeznatelný v datové sadě, měřeno v metrech."@cs ;
  rdfs:comment "mínima separacíon espacial disponible en un conjunto de datos, medida en metros."@es ;
  rdfs:comment "separazione spaziale minima risolvibile in un set di dati, misurata in metri."@it ;
  rdfs:comment "mindste geografiske afstand som kan erkendes i et datasæt, målt i meter."@da ;
  rdfs:label "prostorové rozlišení (metry)"@cs ;
  rdfs:label "resolución espacial (metros)"@es ;
  rdfs:label "risoluzione spaziale (metros)"@it ;
  rdfs:label "spatial resolution (meters)"@en-US ;
  rdfs:label "spatial resolution (metres)"@en-GB ;
  rdfs:label "geografisk opløsning (meter)"@da ;
  rdfs:range xsd:decimal ;
  skos:changeNote "New property added in DCAT 2.0."@en ;
  skos:changeNote "Nová vlastnost přidaná ve verzi DCAT 2.0."@cs ;
  skos:changeNote "Nueva propiedad añadida en DCAT 2.0."@es ;
  skos:changeNote "Nuova proprietà aggiunta in DCAT 2.0."@it ;
  skos:changeNote "Ny genskab tilføjet i DCAT 2.0."@da ;
  skos:definition "minimum spatial separation resolvable in a dataset, measured in meters."@en-US ;
  skos:definition "minimum spatial separation resolvable in a dataset, measured in metres."@en-GB ;
  skos:definition "minimální prostorový rozestup rozeznatelný v datové sadě, měřeno v metrech."@cs ;
  skos:definition "mínima separacíon espacial disponible en un conjunto de datos, medida en metros."@es ;
  skos:definition "separazione spaziale minima risolvibile in un set di dati, misurata in metri."@it ;
  skos:definition "mindste geografiske afstand som kan resolveres i et datasæt, målt i meter."@da ;
  skos:editorialNote "Might appear in the description of a Dataset or a Distribution, so no domain is specified."@en ;
  skos:editorialNote "Může se vyskytnout v popisu Datové sady nebo Distribuce, takže nebyl specifikován definiční obor."@cs ;
  skos:editorialNote "Kan optræde i forbindelse med beskrivelse af datasættet eller datasætditributionen, så der er ikke angivet et domæne for egenskaben."@da ;
  skos:scopeNote "Alternative spatial resolutions might be provided as different dataset distributions."@en ;
  skos:scopeNote "Distintas distribuciones de un conjunto de datos pueden tener resoluciones espaciales diferentes."@es ;
  skos:scopeNote "If the dataset is an image or grid this should correspond to the spacing of items. For other kinds of spatial dataset, this property will usually indicate the smallest distance between items in the dataset."@en ;
  skos:scopeNote "Pokud je datová sada obraz či mřížka, měla by tato vlastnost odpovídat rozestupu položek. Pro ostatní druhy prostorových datových sad bude tato vlastnost obvykle indikovat nejmenší vzdálenost mezi položkami této datové sady."@cs ;
  skos:scopeNote "Risoluzioni spaziali alternative possono essere fornite come diverse distribuzioni di set di dati."@it ;
  skos:scopeNote "Různá prostorová rozlišení mohou být poskytována jako různé distribuce datové sady."@cs ;
  skos:scopeNote "Se il set di dati è un'immagine o una griglia, questo dovrebbe corrispondere alla spaziatura degli elementi. Per altri tipi di set di dati spaziali, questa proprietà di solito indica la distanza minima tra gli elementi nel set di dati."@it ;
  skos:scopeNote "Si el conjunto de datos es una imágen o grilla, esta propiedad corresponde al espaciado de los elementos. Para otro tipo de conjunto de datos espaciales, esta propieda usualmente indica la menor distancia entre los elementos de dichos datos."@es ;
  skos:scopeNote "Alternative geografiske opløsninger kan leveres som forskellige datasætdistributioner."@da ;
  skos:scopeNote "Hvis datasættet udgøres af et billede eller et grid, så bør dette svare til afstanden mellem elementerne. For andre typer af spatiale datasæt, vil denne egenskab typisk indikere den mindste afstand mellem elementerne i datasættet."@da ;
.
dcat:startDate
  a rdf:Property ;
  a owl:DatatypeProperty ;
  rdfs:domain dct:PeriodOfTime ;
  rdfs:label "datum začátku"@cs ;
  rdfs:label "start date"@en ;
  rdfs:label "data di inizio"@it ;
  rdfs:label "startdato"@da ;
  skos:altLabel "starttidspunkt"@da ;
  rdfs:range rdfs:Literal ;
  skos:changeNote "New property added in DCAT 2.0."@en ;
  skos:changeNote "Nuova proprietà aggiunta in DCAT 2.0."@it ;
  skos:changeNote "Nová vlastnost přidaná ve verzi DCAT 2.0."@cs ;
  skos:changeNote "Nueva propiedad agregada en DCAT 2.0."@es ;
  skos:changeNote "Ny egenskab tilføjet i DCAT 2.0."@da ;
  skos:definition "El comienzo del período"@es ;
  skos:definition "The start of the period"@en ;
  skos:definition "L'inizio del periodo"@it ;
  skos:definition "Začátek doby trvání"@cs ;
  skos:definition "Start på perioden."@da ;
  skos:scopeNote "El rango de esta propiedad es intencionalmente genérico con el propósito de permitir distintos niveles de precisión temporal para especificar el comienzo de un período. Por ejemplo, puede expresarse como una fecha (xsd:date), una fecha y un tiempo (xsd:dateTime), o un año (xsd:gYear)."@es ;
  skos:scopeNote "Obor hodnot této vlastnosti je úmyslně obecný, aby umožnil různé úrovně časového rozlišení pro specifikaci začátku doby trvání. Ten může být kupříkladu vyjádřen datumem (xsd:date), datumem a časem (xsd:dateTime) či rokem (xsd:gYear)."@cs ;
  skos:scopeNote "The range of this property is intentionally generic, with the purpose of allowing different level of temporal precision for specifying the start of a period. E.g., it can be expressed with a date (xsd:date), a date and time (xsd:dateTime), or a year (xsd:gYear)."@en ;
  skos:scopeNote "Il range di questa proprietà è volutamente generico, con lo scopo di consentire diversi livelli di precisione temporale per specificare l'inizio di un periodo. Ad esempio, può essere espresso con una data (xsd:date), una data e un'ora (xsd:dateTime), o un anno (xsd:gYear)."@it ;
  skos:scopeNote "Rækkeviden for denne egenskab er bevidst generisk defineret med det formål at tillade forskellige niveauer af tidslig præcision ifm. angivelse af startdatoen for en periode. Den kan eksempelvis udtrykkes som en dato (xsd:date), en dato og et tidspunkt (xsd:dateTime), eller et årstal (xsd:gYear)."@da ;
.
dcat:temporalResolution
  a owl:DatatypeProperty ;
  rdfs:comment "minimum time period resolvable in a dataset."@en ;
  rdfs:comment "minimální doba trvání rozlišitelná v datové sadě."@cs ;
  rdfs:comment "periodo di tempo minimo risolvibile in un set di dati."@it ;
  rdfs:comment "período de tiempo mínimo en el conjunto de datos."@es ;
  rdfs:comment "mindste tidsperiode der kan resolveres i datasættet."@da ;
  rdfs:label "resolución temporal"@es ;
  rdfs:label "risoluzione temporale"@it ;
  rdfs:label "temporal resolution"@en ;
  rdfs:label "časové rozlišení"@cs ;
  rdfs:label "tidslig opløsning"@da ;
  rdfs:range xsd:duration ;
  skos:changeNote "New property added in DCAT 2.0."@en ;
  skos:changeNote "Nová vlastnost přidaná ve verzi DCAT 2.0."@cs ;
  skos:changeNote "Nueva propiedad añadida en DCAT 2.0."@es ;
  skos:changeNote "Nuova proprietà aggiunta in DCAT 2.0."@it ;
  skos:definition "minimum time period resolvable in a dataset."@en ;
  skos:definition "minimální doba trvání rozlišitelná v datové sadě."@cs ;
  skos:definition "periodo di tempo minimo risolvibile in un set di dati."@it ;
  skos:definition "período de tiempo mínimo en el conjunto de datos."@es ;
  skos:definition "mindste tidsperiode der kan resolveres i datasættet."@da ;
  skos:editorialNote "Might appear in the description of a Dataset or a Distribution, so no domain is specified."@en ;
  skos:editorialNote "Může se vyskytnout v popisu Datové sady nebo Distribuce, takže nebyl specifikován definiční obor."@cs ;
  skos:editorialNote "Kan optræde i forbindelse med beskrivelse af datasættet eller datasætditributionen, så der er ikke angivet et domæne for egenskaben."@da ;
  skos:scopeNote "Alternative temporal resolutions might be provided as different dataset distributions."@en ;
  skos:scopeNote "Distintas distribuciones del conjunto de datos pueden tener resoluciones temporales diferentes."@es ;
  skos:scopeNote "If the dataset is a time-series this should correspond to the spacing of items in the series. For other kinds of dataset, this property will usually indicate the smallest time difference between items in the dataset."@en ;
  skos:scopeNote "Pokud je datová sada časovou řadou, měla by tato vlastnost odpovídat rozestupu položek v řadě. Pro ostatní druhy datových sad bude tato vlastnost obvykle indikovat nejmenší časovou vzdálenost mezi položkami této datové sady."@cs ;
  skos:scopeNote "Risoluzioni temporali alternative potrebbero essere fornite come diverse distribuzioni di set di dati."@it ;
  skos:scopeNote "Různá časová rozlišení mohou být poskytována jako různé distribuce datové sady."@cs ;
  skos:scopeNote "Se il set di dati è una serie temporale, questo dovrebbe corrispondere alla spaziatura degli elementi della serie. Per altri tipi di set di dati, questa proprietà di solito indica la più piccola differenza di tempo tra gli elementi nel set di dati."@it ;
  skos:scopeNote "Si el conjunto de datos es una serie temporal, debe corresponder al espaciado de los elementos de la serie. Para otro tipo de conjuntos de datos, esta propiedad indicará usualmente la menor diferencia de tiempo entre elementos en el dataset."@es ;
  skos:scopeNote "Alternative tidslige opløsninger kan leveres som forskellige datasætdistributioner."@da ;
  skos:scopeNote "Hvis datasættet er en tidsserie, så bør denne egenskab svare til afstanden mellem elementerne i tidsserien. For andre typer af datasæt indikerer denne egenskab den mindste tidsforskel mellem elementer i datasættet."@da ;
.
dcat:theme
  a rdf:Property ;
  a owl:ObjectProperty ;
  rdfs:comment "A main category of the resource. A resource can have multiple themes."@en ;
  rdfs:comment "Hlavní téma zdroje. Zdroj může mít více témat."@cs ;
  rdfs:comment "La categoria principale della risorsa. Una risorsa può avere più temi."@it ;
  rdfs:comment "La categoría principal del recurso. Un recurso puede tener varios temas."@es ;
  rdfs:comment "La catégorie principale de la ressource. Une ressource peut avoir plusieurs thèmes."@fr ;
  rdfs:comment "Η κύρια κατηγορία του συνόλου δεδομένων. Ένα σύνολο δεδομένων δύναται να έχει πολλαπλά θέματα."@el ;
  rdfs:comment "التصنيف الرئيسي لقائمة البيانات. قائمة البيانات يمكن أن تملك أكثر من تصنيف رئيسي واحد."@ar ;
  rdfs:comment "データセットの主要カテゴリー。データセットは複数のテーマを持つことができます。"@ja ;
  rdfs:comment "Et centralt emne for ressourcen. En ressource kan have flere centrale emner."@da ;
  rdfs:isDefinedBy <http://www.w3.org/TR/vocab-dcat/> ;
  rdfs:label "tema"@es ;
  rdfs:label "tema"@it ;
  rdfs:label "theme"@en ;
  rdfs:label "thème"@fr ;
  rdfs:label "téma"@cs ;
  rdfs:label "Θέμα"@el ;
  rdfs:label "التصنيف"@ar ;
  rdfs:label "テーマ/カテゴリー"@ja ;
  rdfs:label "emne"@da ;
  skos:altLabel "tema"@da ;
  rdfs:range skos:Concept ;
  rdfs:subPropertyOf dct:subject ;
  skos:definition "A main category of the resource. A resource can have multiple themes."@en ;
  skos:definition "Hlavní téma zdroje. Zdroj může mít více témat."@cs ;
  skos:definition "La categoria principale della risorsa. Una risorsa può avere più temi."@it ;
  skos:definition "La categoría principal del recurso. Un recurso puede tener varios temas."@es ;
  skos:definition "La catégorie principale de la ressource. Une ressource peut avoir plusieurs thèmes."@fr ;
  skos:definition "Η κύρια κατηγορία του συνόλου δεδομένων. Ένα σύνολο δεδομένων δύναται να έχει πολλαπλά θέματα."@el ;
  skos:definition "التصنيف الرئيسي لقائمة البيانات. قائمة البيانات يمكن أن تملك أكثر من تصنيف رئيسي واحد."@ar ;
  skos:definition "データセットの主要カテゴリー。データセットは複数のテーマを持つことができます。"@ja ;
  skos:definition "Et centralt emne for ressourcen. En ressource kan have flere centrale emner."@da ;
  skos:editorialNote "Status: English Definition text modified by DCAT revision team, all except for Italian and Czech translations are pending."@en ;
  skos:scopeNote "El conjunto de skos:Concepts utilizados para categorizar los recursos están organizados en un skos:ConceptScheme que describe todas las categorías y sus relaciones en el catálogo."@es ;
  skos:scopeNote "Il set di concetti skos usati per categorizzare le risorse sono organizzati in skos:ConceptScheme che descrive tutte le categorie e le loro relazioni nel catalogo."@it ;
  skos:scopeNote "Sada instancí třídy skos:Concept použitá pro kategorizaci zdrojů je organizována do schématu konceptů skos:ConceptScheme, které popisuje všechny kategorie v katalogu a jejich vztahy."@cs ;
  skos:scopeNote "The set of skos:Concepts used to categorize the resources are organized in a skos:ConceptScheme describing all the categories and their relations in the catalog."@en ;
  skos:scopeNote "Un ensemble de skos:Concepts utilisés pour catégoriser les ressources sont organisés en un skos:ConceptScheme décrivant toutes les catégories et ses relations dans le catalogue."@fr ;
  skos:scopeNote "Το σετ των skos:Concepts που χρησιμοποιείται για να κατηγοριοποιήσει τα σύνολα δεδομένων είναι οργανωμένο εντός ενός skos:ConceptScheme που περιγράφει όλες τις κατηγορίες και τις σχέσεις αυτών στον κατάλογο."@el ;
  skos:scopeNote "データセットを分類するために用いられるskos:Conceptの集合は、カタログのすべてのカテゴリーとそれらの関係を記述しているskos:ConceptSchemeで組織化されます。"@ja ;
  skos:scopeNote "Samlingen af begreber (skos:Concept) der anvendes til at emneinddele ressourcer organiseres i et begrebssystem (skos:ConceptScheme) som beskriver alle emnerne og deres relationer i kataloget."@da ;
.
dcat:themeTaxonomy
  a rdf:Property ;
  a owl:ObjectProperty ;
  sdo:rangeIncludes owl:Ontology ;
  sdo:rangeIncludes skos:Collection ;
  sdo:rangeIncludes skos:ConceptScheme ;
  rdfs:comment "El sistema de organización del conocimiento utilizado para clasificar conjuntos de datos de catálogos."@es ;
  rdfs:comment "Il sistema di organizzazione della conoscenza (KOS) usato per classificare i dataset del catalogo."@it ;
  rdfs:comment "Le systhème d'ogranisation de connaissances utilisé pour classifier les jeux de données du catalogue."@fr ;
  rdfs:comment "Systém organizace znalostí (KOS) použitý pro klasifikaci datových sad v katalogu."@cs ;
  rdfs:comment "The knowledge organization system (KOS) used to classify catalog's datasets."@en ;
  rdfs:comment "Το σύστημα οργάνωσης γνώσης που χρησιμοποιείται για την κατηγοριοποίηση των συνόλων δεδομένων του καταλόγου."@el ;
  rdfs:comment "لائحة التصنيفات المستخدمه لتصنيف قوائم البيانات ضمن الفهرس"@ar ;
  rdfs:comment "カタログのデータセットを分類するために用いられる知識組織化体系（KOS；knowledge organization system）。"@ja ;
  rdfs:comment "Vidensorganiseringssystem (KOS) som anvendes til at klassificere datasæt i kataloget."@da ;
  rdfs:domain dcat:Catalog ;
  rdfs:isDefinedBy <http://www.w3.org/TR/vocab-dcat/> ;
  rdfs:label "tassonomia dei temi"@it ;
  rdfs:label "taxonomie de thèmes"@fr ;
  rdfs:label "taxonomie témat"@cs ;
  rdfs:label "taxonomía de temas"@es ;
  rdfs:label "theme taxonomy"@en ;
  rdfs:label "Ταξινομία θεματικών κατηγοριών."@el ;
  rdfs:label "قائمة التصنيفات"@ar ;
  rdfs:label "テーマ"@ja ;
  rdfs:label "emnetaksonomi"@da ;
  skos:altLabel "temataksonomi"@da ;
  rdfs:range rdfs:Resource ;
  skos:definition "El sistema de organización del conocimiento utilizado para clasificar conjuntos de datos de catálogos."@es ;
  skos:definition "Il sistema di organizzazione della conoscenza (KOS) usato per classificare i dataset del catalogo."@it ;
  skos:definition "Le systhème d'ogranisation de connaissances utilisé pour classifier les jeux de données du catalogue."@fr ;
  skos:definition "Systém organizace znalostí (KOS) použitý pro klasifikaci datových sad v katalogu."@cs ;
  skos:definition "The knowledge organization system (KOS) used to classify catalog's datasets."@en ;
  skos:definition "Το σύστημα οργάνωσης γνώσης που χρησιμοποιείται για την κατηγοριοποίηση των συνόλων δεδομένων του καταλόγου."@el ;
  skos:definition "لائحة التصنيفات المستخدمه لتصنيف قوائم البيانات ضمن الفهرس"@ar ;
  skos:definition "カタログのデータセットを分類するために用いられる知識組織化体系（KOS；knowledge organization system）。"@ja ;
  skos:definition "Vidensorganiseringssystem (KOS) som anvendes til at klassificere datasæt i kataloget."@da ;
  skos:scopeNote "It is recommended that the taxonomy is organized in a skos:ConceptScheme, skos:Collection, owl:Ontology or similar, which allows each member to be denoted by an IRI and published as linked-data."@en ;
  skos:scopeNote "Si raccomanda che la tassonomia sia organizzata in uno skos:ConceptScheme, skos:Collection, owl:Ontology o simili, che permette ad ogni membro di essere indicato da un IRI e pubblicato come linked-data."@it ;
  skos:scopeNote "Je doporučeno, aby byla taxonomie vyjádřena jako skos:ConceptScheme, skos:Collection, owl:Ontology nebo podobné, aby mohla být každá položka identifikována pomocí IRI a publikována jako propojená data."@cs ;
  skos:scopeNote "Se recomienda que la taxonomía se organice como un skos:ConceptScheme, skos:Collection, owl:Ontology o similar, los cuáles permiten que cada miembro se denote con una IRI y se publique como datos enlazados."@es ;
  skos:scopeNote "Det anbefales at taksonomien organiseres i et skos:ConceptScheme, skos:Collection, owl:Ontology eller lignende, som giver mulighed for at ethvert medlem af taksonomien kan forsynes med en IRI og udgives som linked-data."@da ;
.
foaf:homepage
  a owl:ObjectProperty ;
  rdfs:comment "This axiom needed so that Protege loads DCAT2 without errors."
.
foaf:primaryTopic
  a owl:ObjectProperty ;
  rdfs:comment "This axiom needed so that Protege loads DCAT2 without errors."
.`
    ],
    'foo.txt',
    {
      type: 'text/turtle'
    }
  )
};

validateRdf({
  resource: rdfFile,
  version: RdfVersion.V2
  // eslint-disable-next-line no-console
}).then(response => console.log(response));

export default compose<FC>(memo)(ValidatePage);