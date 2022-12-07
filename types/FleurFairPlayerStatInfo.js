"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FleurFairPlayerStatInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const ProfilePicture_1 = require("./ProfilePicture");
// @generated message type with reflection information, may provide speed optimized methods
class FleurFairPlayerStatInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("FleurFairPlayerStatInfo", [
            { no: 5, name: "profile_picture", kind: "message", T: () => ProfilePicture_1.ProfilePicture },
            { no: 4, name: "stat_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "head_image", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "param", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 9, name: "uid", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "nick_name", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 11, name: "online_id", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = { statId: 0, headImage: 0, param: 0, uid: 0, nickName: "", onlineId: "" };
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
                case /* ProfilePicture profile_picture */ 5:
                    message.profilePicture = ProfilePicture_1.ProfilePicture.internalBinaryRead(reader, reader.uint32(), options, message.profilePicture);
                    break;
                case /* uint32 stat_id */ 4:
                    message.statId = reader.uint32();
                    break;
                case /* uint32 head_image */ 6:
                    message.headImage = reader.uint32();
                    break;
                case /* int32 param */ 8:
                    message.param = reader.int32();
                    break;
                case /* uint32 uid */ 9:
                    message.uid = reader.uint32();
                    break;
                case /* string nick_name */ 2:
                    message.nickName = reader.string();
                    break;
                case /* string online_id */ 11:
                    message.onlineId = reader.string();
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
        /* ProfilePicture profile_picture = 5; */
        if (message.profilePicture)
            ProfilePicture_1.ProfilePicture.internalBinaryWrite(message.profilePicture, writer.tag(5, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* uint32 stat_id = 4; */
        if (message.statId !== 0)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.statId);
        /* uint32 head_image = 6; */
        if (message.headImage !== 0)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.headImage);
        /* int32 param = 8; */
        if (message.param !== 0)
            writer.tag(8, runtime_1.WireType.Varint).int32(message.param);
        /* uint32 uid = 9; */
        if (message.uid !== 0)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.uid);
        /* string nick_name = 2; */
        if (message.nickName !== "")
            writer.tag(2, runtime_1.WireType.LengthDelimited).string(message.nickName);
        /* string online_id = 11; */
        if (message.onlineId !== "")
            writer.tag(11, runtime_1.WireType.LengthDelimited).string(message.onlineId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message FleurFairPlayerStatInfo
 */
exports.FleurFairPlayerStatInfo = new FleurFairPlayerStatInfo$Type();
