"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestRenameAvatarReq = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class QuestRenameAvatarReq$Type extends runtime_5.MessageType {
    constructor() {
        super("QuestRenameAvatarReq", [
            { no: 11, name: "avatar_name", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 12, name: "rename_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "is_check", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = { avatarName: "", renameId: 0, isCheck: false };
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
                case /* string avatar_name */ 11:
                    message.avatarName = reader.string();
                    break;
                case /* uint32 rename_id */ 12:
                    message.renameId = reader.uint32();
                    break;
                case /* bool is_check */ 4:
                    message.isCheck = reader.bool();
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
        /* string avatar_name = 11; */
        if (message.avatarName !== "")
            writer.tag(11, runtime_1.WireType.LengthDelimited).string(message.avatarName);
        /* uint32 rename_id = 12; */
        if (message.renameId !== 0)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.renameId);
        /* bool is_check = 4; */
        if (message.isCheck !== false)
            writer.tag(4, runtime_1.WireType.Varint).bool(message.isCheck);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message QuestRenameAvatarReq
 */
exports.QuestRenameAvatarReq = new QuestRenameAvatarReq$Type();
