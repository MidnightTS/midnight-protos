"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EvtAnimatorParameterNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const EvtAnimatorParameterInfo_1 = require("./EvtAnimatorParameterInfo");
const ForwardType_1 = require("./ForwardType");
// @generated message type with reflection information, may provide speed optimized methods
class EvtAnimatorParameterNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("EvtAnimatorParameterNotify", [
            { no: 9, name: "forward_type", kind: "enum", T: () => ["ForwardType", ForwardType_1.ForwardType, "FORWARD_TYPE_"] },
            { no: 13, name: "animator_param_info", kind: "message", T: () => EvtAnimatorParameterInfo_1.EvtAnimatorParameterInfo }
        ]);
    }
    create(value) {
        const message = { forwardType: 0 };
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
                case /* ForwardType forward_type */ 9:
                    message.forwardType = reader.int32();
                    break;
                case /* EvtAnimatorParameterInfo animator_param_info */ 13:
                    message.animatorParamInfo = EvtAnimatorParameterInfo_1.EvtAnimatorParameterInfo.internalBinaryRead(reader, reader.uint32(), options, message.animatorParamInfo);
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
        /* ForwardType forward_type = 9; */
        if (message.forwardType !== 0)
            writer.tag(9, runtime_1.WireType.Varint).int32(message.forwardType);
        /* EvtAnimatorParameterInfo animator_param_info = 13; */
        if (message.animatorParamInfo)
            EvtAnimatorParameterInfo_1.EvtAnimatorParameterInfo.internalBinaryWrite(message.animatorParamInfo, writer.tag(13, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message EvtAnimatorParameterNotify
 */
exports.EvtAnimatorParameterNotify = new EvtAnimatorParameterNotify$Type();
