"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Unk3300_LOINGBJLJEM = exports.Unk3300_LOINGBJLJEM_Unk3300_KDBJPJADJKF = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
/**
 * @generated from protobuf enum Unk3300_LOINGBJLJEM.Unk3300_KDBJPJADJKF
 */
var Unk3300_LOINGBJLJEM_Unk3300_KDBJPJADJKF;
(function (Unk3300_LOINGBJLJEM_Unk3300_KDBJPJADJKF) {
    /**
     * @generated from protobuf enum value: Unk3300_KDBJPJADJKF_Unk3300_EKBFJPGGECM = 0;
     */
    Unk3300_LOINGBJLJEM_Unk3300_KDBJPJADJKF[Unk3300_LOINGBJLJEM_Unk3300_KDBJPJADJKF["Unk3300_KDBJPJADJKF_Unk3300_EKBFJPGGECM"] = 0] = "Unk3300_KDBJPJADJKF_Unk3300_EKBFJPGGECM";
    /**
     * @generated from protobuf enum value: Unk3300_KDBJPJADJKF_Unk3300_NALHJBKMPCH = 1;
     */
    Unk3300_LOINGBJLJEM_Unk3300_KDBJPJADJKF[Unk3300_LOINGBJLJEM_Unk3300_KDBJPJADJKF["Unk3300_KDBJPJADJKF_Unk3300_NALHJBKMPCH"] = 1] = "Unk3300_KDBJPJADJKF_Unk3300_NALHJBKMPCH";
})(Unk3300_LOINGBJLJEM_Unk3300_KDBJPJADJKF = exports.Unk3300_LOINGBJLJEM_Unk3300_KDBJPJADJKF || (exports.Unk3300_LOINGBJLJEM_Unk3300_KDBJPJADJKF = {}));
// @generated message type with reflection information, may provide speed optimized methods
class Unk3300_LOINGBJLJEM$Type extends runtime_5.MessageType {
    constructor() {
        super("Unk3300_LOINGBJLJEM", [
            { no: 4, name: "Unk3300_NOFBEJLNMLA", kind: "enum", jsonName: "Unk3300NOFBEJLNMLA", T: () => ["Unk3300_LOINGBJLJEM.Unk3300_KDBJPJADJKF", Unk3300_LOINGBJLJEM_Unk3300_KDBJPJADJKF] }
        ]);
    }
    create(value) {
        const message = { unk3300NOFBEJLNMLA: 0 };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* Unk3300_LOINGBJLJEM.Unk3300_KDBJPJADJKF Unk3300_NOFBEJLNMLA = 4 [json_name = "Unk3300NOFBEJLNMLA"];*/ 4:
                    message.unk3300NOFBEJLNMLA = reader.int32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* Unk3300_LOINGBJLJEM.Unk3300_KDBJPJADJKF Unk3300_NOFBEJLNMLA = 4 [json_name = "Unk3300NOFBEJLNMLA"]; */
        if (message.unk3300NOFBEJLNMLA !== 0)
            writer.tag(4, runtime_1.WireType.Varint).int32(message.unk3300NOFBEJLNMLA);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message Unk3300_LOINGBJLJEM
 */
exports.Unk3300_LOINGBJLJEM = new Unk3300_LOINGBJLJEM$Type();
