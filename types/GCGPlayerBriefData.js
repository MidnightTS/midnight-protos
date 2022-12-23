"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GCGPlayerBriefData = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const ProfilePicture_1 = require("./ProfilePicture");
// @generated message type with reflection information, may provide speed optimized methods
class GCGPlayerBriefData$Type extends runtime_5.MessageType {
    constructor() {
        super("GCGPlayerBriefData", [
            { no: 5, name: "online_id", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 9, name: "uid", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "controller_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "profile_picture", kind: "message", T: () => ProfilePicture_1.ProfilePicture },
            { no: 1, name: "nick_name", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 14, name: "card_face_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "scalar", T: 13 /*ScalarType.UINT32*/ } },
            { no: 13, name: "card_id_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "psn_id", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = { onlineId: "", uid: 0, controllerId: 0, nickName: "", cardFaceMap: {}, cardIdList: [], psnId: "" };
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
                case /* string online_id */ 5:
                    message.onlineId = reader.string();
                    break;
                case /* uint32 uid */ 9:
                    message.uid = reader.uint32();
                    break;
                case /* uint32 controller_id */ 10:
                    message.controllerId = reader.uint32();
                    break;
                case /* ProfilePicture profile_picture */ 11:
                    message.profilePicture = ProfilePicture_1.ProfilePicture.internalBinaryRead(reader, reader.uint32(), options, message.profilePicture);
                    break;
                case /* string nick_name */ 1:
                    message.nickName = reader.string();
                    break;
                case /* map<uint32, uint32> card_face_map */ 14:
                    this.binaryReadMap14(message.cardFaceMap, reader, options);
                    break;
                case /* repeated uint32 card_id_list */ 13:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.cardIdList.push(reader.uint32());
                    else
                        message.cardIdList.push(reader.uint32());
                    break;
                case /* string psn_id */ 2:
                    message.psnId = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    binaryReadMap14(map, reader, options) {
        let len = reader.uint32(), end = reader.pos + len, key, val;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.uint32();
                    break;
                case 2:
                    val = reader.uint32();
                    break;
                default: throw new globalThis.Error("unknown map entry field for field GCGPlayerBriefData.card_face_map");
            }
        }
        map[key ?? 0] = val ?? 0;
    }
    internalBinaryWrite(message, writer, options) {
        /* string online_id = 5; */
        if (message.onlineId !== "")
            writer.tag(5, runtime_2.WireType.LengthDelimited).string(message.onlineId);
        /* uint32 uid = 9; */
        if (message.uid !== 0)
            writer.tag(9, runtime_2.WireType.Varint).uint32(message.uid);
        /* uint32 controller_id = 10; */
        if (message.controllerId !== 0)
            writer.tag(10, runtime_2.WireType.Varint).uint32(message.controllerId);
        /* ProfilePicture profile_picture = 11; */
        if (message.profilePicture)
            ProfilePicture_1.ProfilePicture.internalBinaryWrite(message.profilePicture, writer.tag(11, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* string nick_name = 1; */
        if (message.nickName !== "")
            writer.tag(1, runtime_2.WireType.LengthDelimited).string(message.nickName);
        /* map<uint32, uint32> card_face_map = 14; */
        for (let k of Object.keys(message.cardFaceMap))
            writer.tag(14, runtime_2.WireType.LengthDelimited).fork().tag(1, runtime_2.WireType.Varint).uint32(parseInt(k)).tag(2, runtime_2.WireType.Varint).uint32(message.cardFaceMap[k]).join();
        /* repeated uint32 card_id_list = 13; */
        if (message.cardIdList.length) {
            writer.tag(13, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.cardIdList.length; i++)
                writer.uint32(message.cardIdList[i]);
            writer.join();
        }
        /* string psn_id = 2; */
        if (message.psnId !== "")
            writer.tag(2, runtime_2.WireType.LengthDelimited).string(message.psnId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GCGPlayerBriefData
 */
exports.GCGPlayerBriefData = new GCGPlayerBriefData$Type();
