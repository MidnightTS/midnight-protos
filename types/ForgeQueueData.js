"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ForgeQueueData = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class ForgeQueueData$Type extends runtime_5.MessageType {
    constructor() {
        super("ForgeQueueData", [
            { no: 1, name: "Unk3300_KDIPLNBHGDH", kind: "scalar", jsonName: "Unk3300KDIPLNBHGDH", T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "forge_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "Unk3300_GJEECHKDEBD", kind: "scalar", jsonName: "Unk3300GJEECHKDEBD", T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "Unk3300_OOOJNABGHOM", kind: "scalar", jsonName: "Unk3300OOOJNABGHOM", T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "Unk3300_PJCKFNNIMNM", kind: "scalar", jsonName: "Unk3300PJCKFNNIMNM", T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "avatar_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "Unk3300_PJKHPCIMAID", kind: "scalar", jsonName: "Unk3300PJKHPCIMAID", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { unk3300KDIPLNBHGDH: 0, forgeId: 0, unk3300GJEECHKDEBD: 0, unk3300OOOJNABGHOM: 0, unk3300PJCKFNNIMNM: 0, avatarId: 0, unk3300PJKHPCIMAID: 0 };
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
                case /* uint32 Unk3300_KDIPLNBHGDH = 1 [json_name = "Unk3300KDIPLNBHGDH"];*/ 1:
                    message.unk3300KDIPLNBHGDH = reader.uint32();
                    break;
                case /* uint32 forge_id */ 5:
                    message.forgeId = reader.uint32();
                    break;
                case /* uint32 Unk3300_GJEECHKDEBD = 7 [json_name = "Unk3300GJEECHKDEBD"];*/ 7:
                    message.unk3300GJEECHKDEBD = reader.uint32();
                    break;
                case /* uint32 Unk3300_OOOJNABGHOM = 4 [json_name = "Unk3300OOOJNABGHOM"];*/ 4:
                    message.unk3300OOOJNABGHOM = reader.uint32();
                    break;
                case /* uint32 Unk3300_PJCKFNNIMNM = 15 [json_name = "Unk3300PJCKFNNIMNM"];*/ 15:
                    message.unk3300PJCKFNNIMNM = reader.uint32();
                    break;
                case /* uint32 avatar_id */ 12:
                    message.avatarId = reader.uint32();
                    break;
                case /* uint32 Unk3300_PJKHPCIMAID = 3 [json_name = "Unk3300PJKHPCIMAID"];*/ 3:
                    message.unk3300PJKHPCIMAID = reader.uint32();
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
        /* uint32 Unk3300_KDIPLNBHGDH = 1 [json_name = "Unk3300KDIPLNBHGDH"]; */
        if (message.unk3300KDIPLNBHGDH !== 0)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.unk3300KDIPLNBHGDH);
        /* uint32 forge_id = 5; */
        if (message.forgeId !== 0)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.forgeId);
        /* uint32 Unk3300_GJEECHKDEBD = 7 [json_name = "Unk3300GJEECHKDEBD"]; */
        if (message.unk3300GJEECHKDEBD !== 0)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.unk3300GJEECHKDEBD);
        /* uint32 Unk3300_OOOJNABGHOM = 4 [json_name = "Unk3300OOOJNABGHOM"]; */
        if (message.unk3300OOOJNABGHOM !== 0)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.unk3300OOOJNABGHOM);
        /* uint32 Unk3300_PJCKFNNIMNM = 15 [json_name = "Unk3300PJCKFNNIMNM"]; */
        if (message.unk3300PJCKFNNIMNM !== 0)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.unk3300PJCKFNNIMNM);
        /* uint32 avatar_id = 12; */
        if (message.avatarId !== 0)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.avatarId);
        /* uint32 Unk3300_PJKHPCIMAID = 3 [json_name = "Unk3300PJKHPCIMAID"]; */
        if (message.unk3300PJKHPCIMAID !== 0)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.unk3300PJKHPCIMAID);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ForgeQueueData
 */
exports.ForgeQueueData = new ForgeQueueData$Type();
