"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DealAddFriendReq = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const DealAddFriendResultType_1 = require("./DealAddFriendResultType");
// @generated message type with reflection information, may provide speed optimized methods
class DealAddFriendReq$Type extends runtime_5.MessageType {
    constructor() {
        super("DealAddFriendReq", [
            { no: 7, name: "deal_add_friend_result", kind: "enum", T: () => ["DealAddFriendResultType", DealAddFriendResultType_1.DealAddFriendResultType, "DEAL_ADD_FRIEND_RESULT_TYPE_"] },
            { no: 10, name: "target_uid", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { dealAddFriendResult: 0, targetUid: 0 };
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
                case /* DealAddFriendResultType deal_add_friend_result */ 7:
                    message.dealAddFriendResult = reader.int32();
                    break;
                case /* uint32 target_uid */ 10:
                    message.targetUid = reader.uint32();
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
        /* DealAddFriendResultType deal_add_friend_result = 7; */
        if (message.dealAddFriendResult !== 0)
            writer.tag(7, runtime_1.WireType.Varint).int32(message.dealAddFriendResult);
        /* uint32 target_uid = 10; */
        if (message.targetUid !== 0)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.targetUid);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message DealAddFriendReq
 */
exports.DealAddFriendReq = new DealAddFriendReq$Type();
