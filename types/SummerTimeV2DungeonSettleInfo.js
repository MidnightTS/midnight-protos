"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SummerTimeV2DungeonSettleInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class SummerTimeV2DungeonSettleInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("SummerTimeV2DungeonSettleInfo", [
            { no: 10, name: "Unk3300_JHBCHFHAGFO", kind: "scalar", jsonName: "Unk3300JHBCHFHAGFO", T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "is_success", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 11, name: "Unk3300_BNNMNCKEHHO", kind: "scalar", jsonName: "Unk3300BNNMNCKEHHO", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { unk3300JHBCHFHAGFO: 0, isSuccess: false, unk3300BNNMNCKEHHO: 0 };
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
                case /* uint32 Unk3300_JHBCHFHAGFO = 10 [json_name = "Unk3300JHBCHFHAGFO"];*/ 10:
                    message.unk3300JHBCHFHAGFO = reader.uint32();
                    break;
                case /* bool is_success */ 1:
                    message.isSuccess = reader.bool();
                    break;
                case /* uint32 Unk3300_BNNMNCKEHHO = 11 [json_name = "Unk3300BNNMNCKEHHO"];*/ 11:
                    message.unk3300BNNMNCKEHHO = reader.uint32();
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
        /* uint32 Unk3300_JHBCHFHAGFO = 10 [json_name = "Unk3300JHBCHFHAGFO"]; */
        if (message.unk3300JHBCHFHAGFO !== 0)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.unk3300JHBCHFHAGFO);
        /* bool is_success = 1; */
        if (message.isSuccess !== false)
            writer.tag(1, runtime_1.WireType.Varint).bool(message.isSuccess);
        /* uint32 Unk3300_BNNMNCKEHHO = 11 [json_name = "Unk3300BNNMNCKEHHO"]; */
        if (message.unk3300BNNMNCKEHHO !== 0)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.unk3300BNNMNCKEHHO);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message SummerTimeV2DungeonSettleInfo
 */
exports.SummerTimeV2DungeonSettleInfo = new SummerTimeV2DungeonSettleInfo$Type();
