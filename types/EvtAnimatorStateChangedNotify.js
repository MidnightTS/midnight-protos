"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EvtAnimatorStateChangedNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const EvtAnimatorStateChangedInfo_1 = require("./EvtAnimatorStateChangedInfo");
const ForwardType_1 = require("./ForwardType");
// @generated message type with reflection information, may provide speed optimized methods
class EvtAnimatorStateChangedNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("EvtAnimatorStateChangedNotify", [
            { no: 14, name: "forward_type", kind: "enum", T: () => ["ForwardType", ForwardType_1.ForwardType, "FORWARD_TYPE_"] },
            { no: 2, name: "evt_animator_state_changed_info", kind: "message", T: () => EvtAnimatorStateChangedInfo_1.EvtAnimatorStateChangedInfo }
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
                case /* ForwardType forward_type */ 14:
                    message.forwardType = reader.int32();
                    break;
                case /* EvtAnimatorStateChangedInfo evt_animator_state_changed_info */ 2:
                    message.evtAnimatorStateChangedInfo = EvtAnimatorStateChangedInfo_1.EvtAnimatorStateChangedInfo.internalBinaryRead(reader, reader.uint32(), options, message.evtAnimatorStateChangedInfo);
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
        /* ForwardType forward_type = 14; */
        if (message.forwardType !== 0)
            writer.tag(14, runtime_1.WireType.Varint).int32(message.forwardType);
        /* EvtAnimatorStateChangedInfo evt_animator_state_changed_info = 2; */
        if (message.evtAnimatorStateChangedInfo)
            EvtAnimatorStateChangedInfo_1.EvtAnimatorStateChangedInfo.internalBinaryWrite(message.evtAnimatorStateChangedInfo, writer.tag(2, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message EvtAnimatorStateChangedNotify
 */
exports.EvtAnimatorStateChangedNotify = new EvtAnimatorStateChangedNotify$Type();
