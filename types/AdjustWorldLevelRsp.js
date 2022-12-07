"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdjustWorldLevelRsp = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class AdjustWorldLevelRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("AdjustWorldLevelRsp", [
            { no: 1, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 11, name: "after_world_level", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "cd_over_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { retcode: 0, afterWorldLevel: 0, cdOverTime: 0 };
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
                case /* int32 retcode */ 1:
                    message.retcode = reader.int32();
                    break;
                case /* uint32 after_world_level */ 11:
                    message.afterWorldLevel = reader.uint32();
                    break;
                case /* uint32 cd_over_time */ 5:
                    message.cdOverTime = reader.uint32();
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
        /* int32 retcode = 1; */
        if (message.retcode !== 0)
            writer.tag(1, runtime_1.WireType.Varint).int32(message.retcode);
        /* uint32 after_world_level = 11; */
        if (message.afterWorldLevel !== 0)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.afterWorldLevel);
        /* uint32 cd_over_time = 5; */
        if (message.cdOverTime !== 0)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.cdOverTime);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message AdjustWorldLevelRsp
 */
exports.AdjustWorldLevelRsp = new AdjustWorldLevelRsp$Type();
