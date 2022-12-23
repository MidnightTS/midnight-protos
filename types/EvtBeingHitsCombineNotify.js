"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EvtBeingHitsCombineNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const ForwardType_1 = require("./ForwardType");
const EvtBeingHitInfo_1 = require("./EvtBeingHitInfo");
// @generated message type with reflection information, may provide speed optimized methods
class EvtBeingHitsCombineNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("EvtBeingHitsCombineNotify", [
            { no: 9, name: "evt_being_hit_info_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => EvtBeingHitInfo_1.EvtBeingHitInfo },
            { no: 7, name: "forward_type", kind: "enum", T: () => ["ForwardType", ForwardType_1.ForwardType, "FORWARD_TYPE_"] }
        ]);
    }
    create(value) {
        const message = { evtBeingHitInfoList: [], forwardType: 0 };
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
                case /* repeated EvtBeingHitInfo evt_being_hit_info_list */ 9:
                    message.evtBeingHitInfoList.push(EvtBeingHitInfo_1.EvtBeingHitInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* ForwardType forward_type */ 7:
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
        /* repeated EvtBeingHitInfo evt_being_hit_info_list = 9; */
        for (let i = 0; i < message.evtBeingHitInfoList.length; i++)
            EvtBeingHitInfo_1.EvtBeingHitInfo.internalBinaryWrite(message.evtBeingHitInfoList[i], writer.tag(9, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* ForwardType forward_type = 7; */
        if (message.forwardType !== 0)
            writer.tag(7, runtime_1.WireType.Varint).int32(message.forwardType);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message EvtBeingHitsCombineNotify
 */
exports.EvtBeingHitsCombineNotify = new EvtBeingHitsCombineNotify$Type();
