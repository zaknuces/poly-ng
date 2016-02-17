/**
 * A sample model class that represents a product in a inventory catalog system.
 *
 * Created by owais zahid <owais.zahid@autodesk.com> on 02/16/2015.
 */
 export class Product {
    entryDate: Date;
    name: string;
    description: string;
    additionalComments: string;
    serialNumber: number;
    isExpired: boolean;

    constructor(entryDate, name, description, additionalComments, serialNumber, isExpired) {
        this.entryDate = entryDate;
        this.name = name;
        this.description = description;
        this.additionalComments = additionalComments;
        this.serialNumber = serialNumber;
        this.isExpired = isExpired;
    }
}
