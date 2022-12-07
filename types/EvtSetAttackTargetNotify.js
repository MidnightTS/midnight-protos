"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EvtSetAttackTargetNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const ForwardType_1 = require("./ForwardType");
const EvtSetAttackTargetInfo_1 = require("./EvtSetAttackTargetInfo");
// @generated message type with reflection information, may provide speed optimized methods
class EvtSetAttackTargetNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("EvtSetAttackTargetNotify", [
            { no: 13, name: "evt_set_attack_target_info", kind: "message", T: () => EvtSetAttackTargetInfo_1.EvtSetAttackTargetInfo },
            { no: 6, name: "forward_type", kind: "enum", T: () => ["ForwardType", ForwardType_1.ForwardType, "FORWARD_TYPE_"] }
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
                case /* EvtSetAttackTargetInfo evt_set_attack_target_info */ 13:
                    message.evtSetAttackTargetInfo = EvtSetAttackTargetInfo_1.EvtSetAttackTargetInfo.internalBinaryRead(reader, reader.uint32(), options, message.evtSetAttackTargetInfo);
                    break;
                case /* ForwardType forward_type */ 6:
                    message.forwardType = reader.int32();
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
        /* EvtSetAttackTargetInfo evt_set_attack_target_info = 13; */
        if (message.evtSetAttackTargetInfo)
            EvtSetAttackTargetInfo_1.EvtSetAttackTargetInfo.internalBinaryWrite(message.evtSetAttackTargetInfo, writer.tag(13, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* ForwardType forward_type = 6; */
        if (message.forwardType !== 0)
            writer.tag(6, runtime_1.WireType.Varint).int32(message.forwardType);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message EvtSetAttackTargetNotify
 */
exports.EvtSetAttackTargetNotify = new EvtSetAttackTargetNotify$Type();
