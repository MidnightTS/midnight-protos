"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GachaWishRsp = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class GachaWishRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("GachaWishRsp", [
            { no: 6, name: "Unk3300_NMOKGFGDFFC", kind: "scalar", jsonName: "Unk3300NMOKGFGDFFC", T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "Unk3300_KEIJFMKAKDH", kind: "scalar", jsonName: "Unk3300KEIJFMKAKDH", T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "gacha_schedule_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 10, name: "Unk3300_BLLMPAJNCPI", kind: "scalar", jsonName: "Unk3300BLLMPAJNCPI", T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "gacha_type", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { unk3300NMOKGFGDFFC: 0, unk3300KEIJFMKAKDH: 0, gachaScheduleId: 0, retcode: 0, unk3300BLLMPAJNCPI: 0, gachaType: 0 };
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
                case /* uint32 Unk3300_NMOKGFGDFFC = 6 [json_name = "Unk3300NMOKGFGDFFC"];*/ 6:
                    message.unk3300NMOKGFGDFFC = reader.uint32();
                    break;
                case /* uint32 Unk3300_KEIJFMKAKDH = 15 [json_name = "Unk3300KEIJFMKAKDH"];*/ 15:
                    message.unk3300KEIJFMKAKDH = reader.uint32();
                    break;
                case /* uint32 gacha_schedule_id */ 11:
                    message.gachaScheduleId = reader.uint32();
                    break;
                case /* int32 retcode */ 13:
                    message.retcode = reader.int32();
                    break;
                case /* uint32 Unk3300_BLLMPAJNCPI = 10 [json_name = "Unk3300BLLMPAJNCPI"];*/ 10:
                    message.unk3300BLLMPAJNCPI = reader.uint32();
                    break;
                case /* uint32 gacha_type */ 8:
                    message.gachaType = reader.uint32();
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
        /* uint32 Unk3300_NMOKGFGDFFC = 6 [json_name = "Unk3300NMOKGFGDFFC"]; */
        if (message.unk3300NMOKGFGDFFC !== 0)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.unk3300NMOKGFGDFFC);
        /* uint32 Unk3300_KEIJFMKAKDH = 15 [json_name = "Unk3300KEIJFMKAKDH"]; */
        if (message.unk3300KEIJFMKAKDH !== 0)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.unk3300KEIJFMKAKDH);
        /* uint32 gacha_schedule_id = 11; */
        if (message.gachaScheduleId !== 0)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.gachaScheduleId);
        /* int32 retcode = 13; */
        if (message.retcode !== 0)
            writer.tag(13, runtime_1.WireType.Varint).int32(message.retcode);
        /* uint32 Unk3300_BLLMPAJNCPI = 10 [json_name = "Unk3300BLLMPAJNCPI"]; */
        if (message.unk3300BLLMPAJNCPI !== 0)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.unk3300BLLMPAJNCPI);
        /* uint32 gacha_type = 8; */
        if (message.gachaType !== 0)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.gachaType);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GachaWishRsp
 */
exports.GachaWishRsp = new GachaWishRsp$Type();
