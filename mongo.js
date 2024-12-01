
use contact;


db.contactlist.insertMany([
    { nom: "Ben", prenom: "Moris", email: "ben@gmail.com", age: 26 },
    { nom: "Kefi", prenom: "Seif", email: "kefi@gmail.com", age: 15 },
    { nom: "Emilie", prenom: "brouge", email: "emilie.b@gmail.com", age: 40 },
    { nom: "Alex", prenom: "brown", age: 4 },
    { nom: "Denzel", prenom: "Washington", age: 3 }
]);


print("Liste complète des contacts :");
db.contactlist.find().forEach(contact => printjson(contact));


let contact = db.contactlist.findOne({ prenom: "Moris" });
print("\nInformations du contact trouvé par son prénom (Moris) :");
printjson(contact);


print("\nContacts ayant un âge > 18 :");
db.contactlist.find({ age: { $gt: 18 } }).forEach(contact => printjson(contact));

print("\nContacts ayant un âge > 18 et dont le nom contient 'ah' :");
db.contactlist.find({ age: { $gt: 18 }, nom: { $regex: "ah", $options: "i" } }).forEach(contact => printjson(contact));


print("\nMise à jour du prénom 'Seif' en 'Anis' :");
db.contactlist.updateOne(
    { prenom: "Seif", nom: "Kefi" },
    { $set: { prenom: "Anis" } }
);
printjson(db.contactlist.findOne({ nom: "Kefi" }));

print("\nSuppression des contacts ayant moins de 5 ans :");
db.contactlist.deleteMany({ age: { $lt: 5 } });


print("\nListe complète des contacts après suppression :");
db.contactlist.find().forEach(contact => printjson(contact));