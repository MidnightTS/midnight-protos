"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeaLampFlyLampRsp = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class SeaLampFlyLampRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("SeaLampFlyLampRsp", [
            { no: 3, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 9, name: "item_num", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "item_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { retcode: 0, itemNum: 0, itemId: 0 };
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
                case /* int32 retcode */ 3:
                    message.retcode = reader.int32();
                    break;
                case /* uint32 item_num */ 9:
                    message.itemNum = reader.uint32();
                    break;
                case /* uint32 item_id */ 10:
                    message.itemId = reader.uint32();
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
        /* int32 retcode = 3; */
        if (message.retcode !== 0)
            writer.tag(3, runtime_1.WireType.Varint).int32(message.retcode);
        /* uint32 item_num = 9; */
        if (message.itemNum !== 0)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.itemNum);
        /* uint32 item_id = 10; */
        if (message.itemId !== 0)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.itemId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message SeaLampFlyLampRsp
 */
exports.SeaLampFlyLampRsp = new SeaLampFlyLampRsp$Type();
