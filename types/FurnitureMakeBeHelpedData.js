"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FurnitureMakeBeHelpedData = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const ProfilePicture_1 = require("./ProfilePicture");
// @generated message type with reflection information, may provide speed optimized methods
class FurnitureMakeBeHelpedData$Type extends runtime_5.MessageType {
    constructor() {
        super("FurnitureMakeBeHelpedData", [
            { no: 11, name: "player_name", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 7, name: "icon", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "profile_picture", kind: "message", T: () => ProfilePicture_1.ProfilePicture },
            { no: 12, name: "time", kind: "scalar", T: 7 /*ScalarType.FIXED32*/ },
            { no: 8, name: "uid", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { playerName: "", icon: 0, time: 0, uid: 0 };
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
                case /* string player_name */ 11:
                    message.playerName = reader.string();
                    break;
                case /* uint32 icon */ 7:
                    message.icon = reader.uint32();
                    break;
                case /* ProfilePicture profile_picture */ 2:
                    message.profilePicture = ProfilePicture_1.ProfilePicture.internalBinaryRead(reader, reader.uint32(), options, message.profilePicture);
                    break;
                case /* fixed32 time */ 12:
                    message.time = reader.fixed32();
                    break;
                case /* uint32 uid */ 8:
                    message.uid = reader.uint32();
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
        /* string player_name = 11; */
        if (message.playerName !== "")
            writer.tag(11, runtime_1.WireType.LengthDelimited).string(message.playerName);
        /* uint32 icon = 7; */
        if (message.icon !== 0)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.icon);
        /* ProfilePicture profile_picture = 2; */
        if (message.profilePicture)
            ProfilePicture_1.ProfilePicture.internalBinaryWrite(message.profilePicture, writer.tag(2, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* fixed32 time = 12; */
        if (message.time !== 0)
            writer.tag(12, runtime_1.WireType.Bit32).fixed32(message.time);
        /* uint32 uid = 8; */
        if (message.uid !== 0)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.uid);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message FurnitureMakeBeHelpedData
 */
exports.FurnitureMakeBeHelpedData = new FurnitureMakeBeHelpedData$Type();
