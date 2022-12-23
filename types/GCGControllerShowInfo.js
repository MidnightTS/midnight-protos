"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GCGControllerShowInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const ProfilePicture_1 = require("./ProfilePicture");
// @generated message type with reflection information, may provide speed optimized methods
class GCGControllerShowInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("GCGControllerShowInfo", [
            { no: 12, name: "psn_id", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 10, name: "nick_name", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 15, name: "online_id", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "profile_picture", kind: "message", T: () => ProfilePicture_1.ProfilePicture },
            { no: 11, name: "controller_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { psnId: "", nickName: "", onlineId: "", controllerId: 0 };
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
                case /* string psn_id */ 12:
                    message.psnId = reader.string();
                    break;
                case /* string nick_name */ 10:
                    message.nickName = reader.string();
                    break;
                case /* string online_id */ 15:
                    message.onlineId = reader.string();
                    break;
                case /* ProfilePicture profile_picture */ 3:
                    message.profilePicture = ProfilePicture_1.ProfilePicture.internalBinaryRead(reader, reader.uint32(), options, message.profilePicture);
                    break;
                case /* uint32 controller_id */ 11:
                    message.controllerId = reader.uint32();
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
        /* string psn_id = 12; */
        if (message.psnId !== "")
            writer.tag(12, runtime_1.WireType.LengthDelimited).string(message.psnId);
        /* string nick_name = 10; */
        if (message.nickName !== "")
            writer.tag(10, runtime_1.WireType.LengthDelimited).string(message.nickName);
        /* string online_id = 15; */
        if (message.onlineId !== "")
            writer.tag(15, runtime_1.WireType.LengthDelimited).string(message.onlineId);
        /* ProfilePicture profile_picture = 3; */
        if (message.profilePicture)
            ProfilePicture_1.ProfilePicture.internalBinaryWrite(message.profilePicture, writer.tag(3, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* uint32 controller_id = 11; */
        if (message.controllerId !== 0)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.controllerId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GCGControllerShowInfo
 */
exports.GCGControllerShowInfo = new GCGControllerShowInfo$Type();
