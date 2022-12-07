"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AISnapshotEntitySkillCycle = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class AISnapshotEntitySkillCycle$Type extends runtime_5.MessageType {
    constructor() {
        super("AISnapshotEntitySkillCycle", [
            { no: 14, name: "Unk3300_IIOIBLEOHEK", kind: "scalar", jsonName: "Unk3300IIOIBLEOHEK", T: 8 /*ScalarType.BOOL*/ },
            { no: 12, name: "skill_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "Unk3300_ABKFNGIDFMI", kind: "scalar", jsonName: "Unk3300ABKFNGIDFMI", T: 8 /*ScalarType.BOOL*/ },
            { no: 2, name: "Unk3300_IFKDIMDJBDH", kind: "scalar", jsonName: "Unk3300IFKDIMDJBDH", T: 8 /*ScalarType.BOOL*/ },
            { no: 1, name: "Unk3300_EGIILMJFEBE", kind: "scalar", jsonName: "Unk3300EGIILMJFEBE", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = { unk3300IIOIBLEOHEK: false, skillId: 0, unk3300ABKFNGIDFMI: false, unk3300IFKDIMDJBDH: false, unk3300EGIILMJFEBE: false };
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
                case /* bool Unk3300_IIOIBLEOHEK = 14 [json_name = "Unk3300IIOIBLEOHEK"];*/ 14:
                    message.unk3300IIOIBLEOHEK = reader.bool();
                    break;
                case /* uint32 skill_id */ 12:
                    message.skillId = reader.uint32();
                    break;
                case /* bool Unk3300_ABKFNGIDFMI = 7 [json_name = "Unk3300ABKFNGIDFMI"];*/ 7:
                    message.unk3300ABKFNGIDFMI = reader.bool();
                    break;
                case /* bool Unk3300_IFKDIMDJBDH = 2 [json_name = "Unk3300IFKDIMDJBDH"];*/ 2:
                    message.unk3300IFKDIMDJBDH = reader.bool();
                    break;
                case /* bool Unk3300_EGIILMJFEBE = 1 [json_name = "Unk3300EGIILMJFEBE"];*/ 1:
                    message.unk3300EGIILMJFEBE = reader.bool();
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
        /* bool Unk3300_IIOIBLEOHEK = 14 [json_name = "Unk3300IIOIBLEOHEK"]; */
        if (message.unk3300IIOIBLEOHEK !== false)
            writer.tag(14, runtime_1.WireType.Varint).bool(message.unk3300IIOIBLEOHEK);
        /* uint32 skill_id = 12; */
        if (message.skillId !== 0)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.skillId);
        /* bool Unk3300_ABKFNGIDFMI = 7 [json_name = "Unk3300ABKFNGIDFMI"]; */
        if (message.unk3300ABKFNGIDFMI !== false)
            writer.tag(7, runtime_1.WireType.Varint).bool(message.unk3300ABKFNGIDFMI);
        /* bool Unk3300_IFKDIMDJBDH = 2 [json_name = "Unk3300IFKDIMDJBDH"]; */
        if (message.unk3300IFKDIMDJBDH !== false)
            writer.tag(2, runtime_1.WireType.Varint).bool(message.unk3300IFKDIMDJBDH);
        /* bool Unk3300_EGIILMJFEBE = 1 [json_name = "Unk3300EGIILMJFEBE"]; */
        if (message.unk3300EGIILMJFEBE !== false)
            writer.tag(1, runtime_1.WireType.Varint).bool(message.unk3300EGIILMJFEBE);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message AISnapshotEntitySkillCycle
 */
exports.AISnapshotEntitySkillCycle = new AISnapshotEntitySkillCycle$Type();
