"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlessingRecvPicRecord = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const ProfilePicture_1 = require("./ProfilePicture");
// @generated message type with reflection information, may provide speed optimized methods
class BlessingRecvPicRecord$Type extends runtime_5.MessageType {
    constructor() {
        super("BlessingRecvPicRecord", [
            { no: 2, name: "is_recv", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 5, name: "nickname", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 6, name: "avatar_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "profile_picture", kind: "message", T: () => ProfilePicture_1.ProfilePicture },
            { no: 10, name: "signature", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 8, name: "remark_name", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "uid", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "pic_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "index", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { isRecv: false, nickname: "", avatarId: 0, signature: "", remarkName: "", uid: 0, picId: 0, index: 0 };
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
                case /* bool is_recv */ 2:
                    message.isRecv = reader.bool();
                    break;
                case /* string nickname */ 5:
                    message.nickname = reader.string();
                    break;
                case /* uint32 avatar_id */ 6:
                    message.avatarId = reader.uint32();
                    break;
                case /* ProfilePicture profile_picture */ 9:
                    message.profilePicture = ProfilePicture_1.ProfilePicture.internalBinaryRead(reader, reader.uint32(), options, message.profilePicture);
                    break;
                case /* string signature */ 10:
                    message.signature = reader.string();
                    break;
                case /* string remark_name */ 8:
                    message.remarkName = reader.string();
                    break;
                case /* uint32 uid */ 3:
                    message.uid = reader.uint32();
                    break;
                case /* uint32 pic_id */ 12:
                    message.picId = reader.uint32();
                    break;
                case /* uint32 index */ 11:
                    message.index = reader.uint32();
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
        /* bool is_recv = 2; */
        if (message.isRecv !== false)
            writer.tag(2, runtime_1.WireType.Varint).bool(message.isRecv);
        /* string nickname = 5; */
        if (message.nickname !== "")
            writer.tag(5, runtime_1.WireType.LengthDelimited).string(message.nickname);
        /* uint32 avatar_id = 6; */
        if (message.avatarId !== 0)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.avatarId);
        /* ProfilePicture profile_picture = 9; */
        if (message.profilePicture)
            ProfilePicture_1.ProfilePicture.internalBinaryWrite(message.profilePicture, writer.tag(9, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* string signature = 10; */
        if (message.signature !== "")
            writer.tag(10, runtime_1.WireType.LengthDelimited).string(message.signature);
        /* string remark_name = 8; */
        if (message.remarkName !== "")
            writer.tag(8, runtime_1.WireType.LengthDelimited).string(message.remarkName);
        /* uint32 uid = 3; */
        if (message.uid !== 0)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.uid);
        /* uint32 pic_id = 12; */
        if (message.picId !== 0)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.picId);
        /* uint32 index = 11; */
        if (message.index !== 0)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.index);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message BlessingRecvPicRecord
 */
exports.BlessingRecvPicRecord = new BlessingRecvPicRecord$Type();
