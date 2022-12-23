"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GCGMsgPVEIntentionChange = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const GCGMsgPVEIntention_1 = require("./GCGMsgPVEIntention");
const GCGIntentionChangeType_1 = require("./GCGIntentionChangeType");
// @generated message type with reflection information, may provide speed optimized methods
class GCGMsgPVEIntentionChange$Type extends runtime_5.MessageType {
    constructor() {
        super("GCGMsgPVEIntentionChange", [
            { no: 9, name: "change_type", kind: "enum", T: () => ["GCGIntentionChangeType", GCGIntentionChangeType_1.GCGIntentionChangeType] },
            { no: 6, name: "change_intention_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => GCGMsgPVEIntention_1.GCGMsgPVEIntention }
        ]);
    }
    create(value) {
        const message = { changeType: 0, changeIntentionList: [] };
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
                case /* GCGIntentionChangeType change_type */ 9:
                    message.changeType = reader.int32();
                    break;
                case /* repeated GCGMsgPVEIntention change_intention_list */ 6:
                    message.changeIntentionList.push(GCGMsgPVEIntention_1.GCGMsgPVEIntention.internalBinaryRead(reader, reader.uint32(), options));
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
        /* GCGIntentionChangeType change_type = 9; */
        if (message.changeType !== 0)
            writer.tag(9, runtime_1.WireType.Varint).int32(message.changeType);
        /* repeated GCGMsgPVEIntention change_intention_list = 6; */
        for (let i = 0; i < message.changeIntentionList.length; i++)
            GCGMsgPVEIntention_1.GCGMsgPVEIntention.internalBinaryWrite(message.changeIntentionList[i], writer.tag(6, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GCGMsgPVEIntentionChange
 */
exports.GCGMsgPVEIntentionChange = new GCGMsgPVEIntentionChange$Type();
