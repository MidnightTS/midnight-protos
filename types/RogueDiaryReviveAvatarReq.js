"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RogueDiaryReviveAvatarReq = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const RogueDiaryAvatar_1 = require("./RogueDiaryAvatar");
// @generated message type with reflection information, may provide speed optimized methods
class RogueDiaryReviveAvatarReq$Type extends runtime_5.MessageType {
    constructor() {
        super("RogueDiaryReviveAvatarReq", [
            { no: 15, name: "revive_avatar", kind: "message", T: () => RogueDiaryAvatar_1.RogueDiaryAvatar }
        ]);
    }
    create(value) {
        const message = {};
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
                case /* RogueDiaryAvatar revive_avatar */ 15:
                    message.reviveAvatar = RogueDiaryAvatar_1.RogueDiaryAvatar.internalBinaryRead(reader, reader.uint32(), options, message.reviveAvatar);
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
        /* RogueDiaryAvatar revive_avatar = 15; */
        if (message.reviveAvatar)
            RogueDiaryAvatar_1.RogueDiaryAvatar.internalBinaryWrite(message.reviveAvatar, writer.tag(15, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message RogueDiaryReviveAvatarReq
 */
exports.RogueDiaryReviveAvatarReq = new RogueDiaryReviveAvatarReq$Type();
