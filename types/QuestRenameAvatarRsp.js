"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestRenameAvatarRsp = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class QuestRenameAvatarRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("QuestRenameAvatarRsp", [
            { no: 11, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 4, name: "is_check", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 15, name: "rename_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "avatar_name", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = { retcode: 0, isCheck: false, renameId: 0, avatarName: "" };
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
                case /* int32 retcode */ 11:
                    message.retcode = reader.int32();
                    break;
                case /* bool is_check */ 4:
                    message.isCheck = reader.bool();
                    break;
                case /* uint32 rename_id */ 15:
                    message.renameId = reader.uint32();
                    break;
                case /* string avatar_name */ 8:
                    message.avatarName = reader.string();
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
        /* int32 retcode = 11; */
        if (message.retcode !== 0)
            writer.tag(11, runtime_1.WireType.Varint).int32(message.retcode);
        /* bool is_check = 4; */
        if (message.isCheck !== false)
            writer.tag(4, runtime_1.WireType.Varint).bool(message.isCheck);
        /* uint32 rename_id = 15; */
        if (message.renameId !== 0)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.renameId);
        /* string avatar_name = 8; */
        if (message.avatarName !== "")
            writer.tag(8, runtime_1.WireType.LengthDelimited).string(message.avatarName);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message QuestRenameAvatarRsp
 */
exports.QuestRenameAvatarRsp = new QuestRenameAvatarRsp$Type();
