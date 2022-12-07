"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EvtRushMoveNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const ForwardType_1 = require("./ForwardType");
const EvtRushMoveInfo_1 = require("./EvtRushMoveInfo");
// @generated message type with reflection information, may provide speed optimized methods
class EvtRushMoveNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("EvtRushMoveNotify", [
            { no: 1, name: "evt_rush_move_info", kind: "message", T: () => EvtRushMoveInfo_1.EvtRushMoveInfo },
            { no: 10, name: "forward_type", kind: "enum", T: () => ["ForwardType", ForwardType_1.ForwardType, "FORWARD_TYPE_"] }
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
                case /* EvtRushMoveInfo evt_rush_move_info */ 1:
                    message.evtRushMoveInfo = EvtRushMoveInfo_1.EvtRushMoveInfo.internalBinaryRead(reader, reader.uint32(), options, message.evtRushMoveInfo);
                    break;
                case /* ForwardType forward_type */ 10:
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
        /* EvtRushMoveInfo evt_rush_move_info = 1; */
        if (message.evtRushMoveInfo)
            EvtRushMoveInfo_1.EvtRushMoveInfo.internalBinaryWrite(message.evtRushMoveInfo, writer.tag(1, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* ForwardType forward_type = 10; */
        if (message.forwardType !== 0)
            writer.tag(10, runtime_1.WireType.Varint).int32(message.forwardType);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message EvtRushMoveNotify
 */
exports.EvtRushMoveNotify = new EvtRushMoveNotify$Type();
