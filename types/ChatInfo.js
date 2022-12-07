"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatInfo_SystemHint = exports.ChatInfo = exports.ChatInfo_SystemHintType = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
/**
 * @generated from protobuf enum ChatInfo.SystemHintType
 */
var ChatInfo_SystemHintType;
(function (ChatInfo_SystemHintType) {
    /**
     * @generated from protobuf enum value: SYSTEM_HINT_TYPE_CHAT_NONE = 0;
     */
    ChatInfo_SystemHintType[ChatInfo_SystemHintType["CHAT_NONE"] = 0] = "CHAT_NONE";
    /**
     * @generated from protobuf enum value: SYSTEM_HINT_TYPE_CHAT_ENTER_WORLD = 1;
     */
    ChatInfo_SystemHintType[ChatInfo_SystemHintType["CHAT_ENTER_WORLD"] = 1] = "CHAT_ENTER_WORLD";
    /**
     * @generated from protobuf enum value: SYSTEM_HINT_TYPE_CHAT_LEAVE_WORLD = 2;
     */
    ChatInfo_SystemHintType[ChatInfo_SystemHintType["CHAT_LEAVE_WORLD"] = 2] = "CHAT_LEAVE_WORLD";
})(ChatInfo_SystemHintType = exports.ChatInfo_SystemHintType || (exports.ChatInfo_SystemHintType = {}));
// @generated message type with reflection information, may provide speed optimized methods
class ChatInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("ChatInfo", [
            { no: 3, name: "is_read", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 1, name: "time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "Unk3300_HENLDIJMIOE", kind: "scalar", jsonName: "Unk3300HENLDIJMIOE", T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "uid", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "Unk3300_PHBEHIGHOCD", kind: "scalar", jsonName: "Unk3300PHBEHIGHOCD", T: 13 /*ScalarType.UINT32*/ },
            { no: 909, name: "text", kind: "scalar", oneof: "content", T: 9 /*ScalarType.STRING*/ },
            { no: 990, name: "icon", kind: "scalar", oneof: "content", T: 13 /*ScalarType.UINT32*/ },
            { no: 799, name: "system_hint", kind: "message", oneof: "content", T: () => exports.ChatInfo_SystemHint }
        ]);
    }
    create(value) {
        const message = { isRead: false, time: 0, unk3300HENLDIJMIOE: 0, uid: 0, unk3300PHBEHIGHOCD: 0, content: { oneofKind: undefined } };
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
                case /* bool is_read */ 3:
                    message.isRead = reader.bool();
                    break;
                case /* uint32 time */ 1:
                    message.time = reader.uint32();
                    break;
                case /* uint32 Unk3300_HENLDIJMIOE = 10 [json_name = "Unk3300HENLDIJMIOE"];*/ 10:
                    message.unk3300HENLDIJMIOE = reader.uint32();
                    break;
                case /* uint32 uid */ 11:
                    message.uid = reader.uint32();
                    break;
                case /* uint32 Unk3300_PHBEHIGHOCD = 5 [json_name = "Unk3300PHBEHIGHOCD"];*/ 5:
                    message.unk3300PHBEHIGHOCD = reader.uint32();
                    break;
                case /* string text */ 909:
                    message.content = {
                        oneofKind: "text",
                        text: reader.string()
                    };
                    break;
                case /* uint32 icon */ 990:
                    message.content = {
                        oneofKind: "icon",
                        icon: reader.uint32()
                    };
                    break;
                case /* ChatInfo.SystemHint system_hint */ 799:
                    message.content = {
                        oneofKind: "systemHint",
                        systemHint: exports.ChatInfo_SystemHint.internalBinaryRead(reader, reader.uint32(), options, message.content.systemHint)
                    };
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
        /* bool is_read = 3; */
        if (message.isRead !== false)
            writer.tag(3, runtime_1.WireType.Varint).bool(message.isRead);
        /* uint32 time = 1; */
        if (message.time !== 0)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.time);
        /* uint32 Unk3300_HENLDIJMIOE = 10 [json_name = "Unk3300HENLDIJMIOE"]; */
        if (message.unk3300HENLDIJMIOE !== 0)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.unk3300HENLDIJMIOE);
        /* uint32 uid = 11; */
        if (message.uid !== 0)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.uid);
        /* uint32 Unk3300_PHBEHIGHOCD = 5 [json_name = "Unk3300PHBEHIGHOCD"]; */
        if (message.unk3300PHBEHIGHOCD !== 0)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.unk3300PHBEHIGHOCD);
        /* string text = 909; */
        if (message.content.oneofKind === "text")
            writer.tag(909, runtime_1.WireType.LengthDelimited).string(message.content.text);
        /* uint32 icon = 990; */
        if (message.content.oneofKind === "icon")
            writer.tag(990, runtime_1.WireType.Varint).uint32(message.content.icon);
        /* ChatInfo.SystemHint system_hint = 799; */
        if (message.content.oneofKind === "systemHint")
            exports.ChatInfo_SystemHint.internalBinaryWrite(message.content.systemHint, writer.tag(799, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ChatInfo
 */
exports.ChatInfo = new ChatInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ChatInfo_SystemHint$Type extends runtime_5.MessageType {
    constructor() {
        super("ChatInfo.SystemHint", [
            { no: 15, name: "type", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { type: 0 };
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
                case /* uint32 type */ 15:
                    message.type = reader.uint32();
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
        /* uint32 type = 15; */
        if (message.type !== 0)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.type);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ChatInfo.SystemHint
 */
exports.ChatInfo_SystemHint = new ChatInfo_SystemHint$Type();
