"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeaLampFlyLampNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const Vector_1 = require("./Vector");
// @generated message type with reflection information, may provide speed optimized methods
class SeaLampFlyLampNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("SeaLampFlyLampNotify", [
            { no: 4, name: "pos", kind: "message", T: () => Vector_1.Vector },
            { no: 3, name: "item_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "item_num", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "param", kind: "scalar", T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value) {
        const message = { itemId: 0, itemNum: 0, param: 0 };
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
                case /* Vector pos */ 4:
                    message.pos = Vector_1.Vector.internalBinaryRead(reader, reader.uint32(), options, message.pos);
                    break;
                case /* uint32 item_id */ 3:
                    message.itemId = reader.uint32();
                    break;
                case /* uint32 item_num */ 15:
                    message.itemNum = reader.uint32();
                    break;
                case /* int32 param */ 13:
                    message.param = reader.int32();
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
        /* Vector pos = 4; */
        if (message.pos)
            Vector_1.Vector.internalBinaryWrite(message.pos, writer.tag(4, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* uint32 item_id = 3; */
        if (message.itemId !== 0)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.itemId);
        /* uint32 item_num = 15; */
        if (message.itemNum !== 0)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.itemNum);
        /* int32 param = 13; */
        if (message.param !== 0)
            writer.tag(13, runtime_1.WireType.Varint).int32(message.param);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message SeaLampFlyLampNotify
 */
exports.SeaLampFlyLampNotify = new SeaLampFlyLampNotify$Type();
