"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GCGDSChangeDeckNameRsp = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class GCGDSChangeDeckNameRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("GCGDSChangeDeckNameRsp", [
            { no: 5, name: "Unk3300_OIPMFIIBPHB", kind: "scalar", jsonName: "Unk3300OIPMFIIBPHB", T: 8 /*ScalarType.BOOL*/ },
            { no: 15, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 10, name: "deck_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "name", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = { unk3300OIPMFIIBPHB: false, retcode: 0, deckId: 0, name: "" };
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
                case /* bool Unk3300_OIPMFIIBPHB = 5 [json_name = "Unk3300OIPMFIIBPHB"];*/ 5:
                    message.unk3300OIPMFIIBPHB = reader.bool();
                    break;
                case /* int32 retcode */ 15:
                    message.retcode = reader.int32();
                    break;
                case /* uint32 deck_id */ 10:
                    message.deckId = reader.uint32();
                    break;
                case /* string name */ 7:
                    message.name = reader.string();
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
        /* bool Unk3300_OIPMFIIBPHB = 5 [json_name = "Unk3300OIPMFIIBPHB"]; */
        if (message.unk3300OIPMFIIBPHB !== false)
            writer.tag(5, runtime_1.WireType.Varint).bool(message.unk3300OIPMFIIBPHB);
        /* int32 retcode = 15; */
        if (message.retcode !== 0)
            writer.tag(15, runtime_1.WireType.Varint).int32(message.retcode);
        /* uint32 deck_id = 10; */
        if (message.deckId !== 0)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.deckId);
        /* string name = 7; */
        if (message.name !== "")
            writer.tag(7, runtime_1.WireType.LengthDelimited).string(message.name);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GCGDSChangeDeckNameRsp
 */
exports.GCGDSChangeDeckNameRsp = new GCGDSChangeDeckNameRsp$Type();
