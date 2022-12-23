"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FireworksReformData = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const FireworksReformParam_1 = require("./FireworksReformParam");
// @generated message type with reflection information, may provide speed optimized methods
class FireworksReformData$Type extends runtime_5.MessageType {
    constructor() {
        super("FireworksReformData", [
            { no: 8, name: "reform_param_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => FireworksReformParam_1.FireworksReformParam },
            { no: 12, name: "id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { reformParamList: [], id: 0 };
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
                case /* repeated FireworksReformParam reform_param_list */ 8:
                    message.reformParamList.push(FireworksReformParam_1.FireworksReformParam.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* uint32 id */ 12:
                    message.id = reader.uint32();
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
        /* repeated FireworksReformParam reform_param_list = 8; */
        for (let i = 0; i < message.reformParamList.length; i++)
            FireworksReformParam_1.FireworksReformParam.internalBinaryWrite(message.reformParamList[i], writer.tag(8, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* uint32 id = 12; */
        if (message.id !== 0)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.id);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message FireworksReformData
 */
exports.FireworksReformData = new FireworksReformData$Type();
