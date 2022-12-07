"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LunaRiteHintPoint = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const LunaRiteHintPointType_1 = require("./LunaRiteHintPointType");
const Vector_1 = require("./Vector");
// @generated message type with reflection information, may provide speed optimized methods
class LunaRiteHintPoint$Type extends runtime_5.MessageType {
    constructor() {
        super("LunaRiteHintPoint", [
            { no: 8, name: "index", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "pos", kind: "message", T: () => Vector_1.Vector },
            { no: 2, name: "area_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "type", kind: "enum", T: () => ["LunaRiteHintPointType", LunaRiteHintPointType_1.LunaRiteHintPointType, "LUNA_RITE_HINT_POINT_TYPE_"] }
        ]);
    }
    create(value) {
        const message = { index: 0, areaId: 0, type: 0 };
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
                case /* uint32 index */ 8:
                    message.index = reader.uint32();
                    break;
                case /* Vector pos */ 3:
                    message.pos = Vector_1.Vector.internalBinaryRead(reader, reader.uint32(), options, message.pos);
                    break;
                case /* uint32 area_id */ 2:
                    message.areaId = reader.uint32();
                    break;
                case /* LunaRiteHintPointType type */ 15:
                    message.type = reader.int32();
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
        /* uint32 index = 8; */
        if (message.index !== 0)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.index);
        /* Vector pos = 3; */
        if (message.pos)
            Vector_1.Vector.internalBinaryWrite(message.pos, writer.tag(3, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* uint32 area_id = 2; */
        if (message.areaId !== 0)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.areaId);
        /* LunaRiteHintPointType type = 15; */
        if (message.type !== 0)
            writer.tag(15, runtime_1.WireType.Varint).int32(message.type);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message LunaRiteHintPoint
 */
exports.LunaRiteHintPoint = new LunaRiteHintPoint$Type();
