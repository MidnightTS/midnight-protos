"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetFriendEnterHomeOptionReq = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const FriendEnterHomeOption_1 = require("./FriendEnterHomeOption");
// @generated message type with reflection information, may provide speed optimized methods
class SetFriendEnterHomeOptionReq$Type extends runtime_5.MessageType {
    constructor() {
        super("SetFriendEnterHomeOptionReq", [
            { no: 8, name: "option", kind: "enum", T: () => ["FriendEnterHomeOption", FriendEnterHomeOption_1.FriendEnterHomeOption, "FRIEND_ENTER_HOME_OPTION_"] }
        ]);
    }
    create(value) {
        const message = { option: 0 };
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
                case /* FriendEnterHomeOption option */ 8:
                    message.option = reader.int32();
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
        /* FriendEnterHomeOption option = 8; */
        if (message.option !== 0)
            writer.tag(8, runtime_1.WireType.Varint).int32(message.option);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message SetFriendEnterHomeOptionReq
 */
exports.SetFriendEnterHomeOptionReq = new SetFriendEnterHomeOptionReq$Type();
