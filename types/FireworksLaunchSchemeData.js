"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FireworksLaunchSchemeData = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const FireworksLaunchParam_1 = require("./FireworksLaunchParam");
// @generated message type with reflection information, may provide speed optimized methods
class FireworksLaunchSchemeData$Type extends runtime_5.MessageType {
    constructor() {
        super("FireworksLaunchSchemeData", [
            { no: 8, name: "launch_param_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => FireworksLaunchParam_1.FireworksLaunchParam },
            { no: 12, name: "fireworks_id_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "scheme_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { launchParamList: [], fireworksIdList: [], schemeId: 0 };
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
                case /* repeated FireworksLaunchParam launch_param_list */ 8:
                    message.launchParamList.push(FireworksLaunchParam_1.FireworksLaunchParam.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated uint32 fireworks_id_list */ 12:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.fireworksIdList.push(reader.uint32());
                    else
                        message.fireworksIdList.push(reader.uint32());
                    break;
                case /* uint32 scheme_id */ 2:
                    message.schemeId = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated FireworksLaunchParam launch_param_list = 8; */
        for (let i = 0; i < message.launchParamList.length; i++)
            FireworksLaunchParam_1.FireworksLaunchParam.internalBinaryWrite(message.launchParamList[i], writer.tag(8, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* repeated uint32 fireworks_id_list = 12; */
        if (message.fireworksIdList.length) {
            writer.tag(12, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.fireworksIdList.length; i++)
                writer.uint32(message.fireworksIdList[i]);
            writer.join();
        }
        /* uint32 scheme_id = 2; */
        if (message.schemeId !== 0)
            writer.tag(2, runtime_2.WireType.Varint).uint32(message.schemeId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message FireworksLaunchSchemeData
 */
exports.FireworksLaunchSchemeData = new FireworksLaunchSchemeData$Type();
