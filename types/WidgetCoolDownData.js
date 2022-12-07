"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WidgetCoolDownData = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class WidgetCoolDownData$Type extends runtime_5.MessageType {
    constructor() {
        super("WidgetCoolDownData", [
            { no: 2, name: "id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "is_success", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 7, name: "cool_down_time", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ }
        ]);
    }
    create(value) {
        const message = { id: 0, isSuccess: false, coolDownTime: 0n };
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
                case /* uint32 id */ 2:
                    message.id = reader.uint32();
                    break;
                case /* bool is_success */ 13:
                    message.isSuccess = reader.bool();
                    break;
                case /* uint64 cool_down_time */ 7:
                    message.coolDownTime = reader.uint64().toBigInt();
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
        /* uint32 id = 2; */
        if (message.id !== 0)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.id);
        /* bool is_success = 13; */
        if (message.isSuccess !== false)
            writer.tag(13, runtime_1.WireType.Varint).bool(message.isSuccess);
        /* uint64 cool_down_time = 7; */
        if (message.coolDownTime !== 0n)
            writer.tag(7, runtime_1.WireType.Varint).uint64(message.coolDownTime);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message WidgetCoolDownData
 */
exports.WidgetCoolDownData = new WidgetCoolDownData$Type();
