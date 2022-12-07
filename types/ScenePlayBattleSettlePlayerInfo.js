"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScenePlayBattleSettlePlayerInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const ProfilePicture_1 = require("./ProfilePicture");
const ExhibitionDisplayInfo_1 = require("./ExhibitionDisplayInfo");
// @generated message type with reflection information, may provide speed optimized methods
class ScenePlayBattleSettlePlayerInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("ScenePlayBattleSettlePlayerInfo", [
            { no: 7, name: "uid", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "card_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => ExhibitionDisplayInfo_1.ExhibitionDisplayInfo },
            { no: 8, name: "profile_picture", kind: "message", T: () => ProfilePicture_1.ProfilePicture },
            { no: 3, name: "nickname", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 11, name: "param", kind: "scalar", T: 3 /*ScalarType.INT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 13, name: "statistic_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "online_id", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "head_image", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { uid: 0, cardList: [], nickname: "", param: 0n, statisticId: 0, onlineId: "", headImage: 0 };
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
                case /* uint32 uid */ 7:
                    message.uid = reader.uint32();
                    break;
                case /* repeated ExhibitionDisplayInfo card_list */ 4:
                    message.cardList.push(ExhibitionDisplayInfo_1.ExhibitionDisplayInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* ProfilePicture profile_picture */ 8:
                    message.profilePicture = ProfilePicture_1.ProfilePicture.internalBinaryRead(reader, reader.uint32(), options, message.profilePicture);
                    break;
                case /* string nickname */ 3:
                    message.nickname = reader.string();
                    break;
                case /* int64 param */ 11:
                    message.param = reader.int64().toBigInt();
                    break;
                case /* uint32 statistic_id */ 13:
                    message.statisticId = reader.uint32();
                    break;
                case /* string online_id */ 5:
                    message.onlineId = reader.string();
                    break;
                case /* uint32 head_image */ 2:
                    message.headImage = reader.uint32();
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
        /* uint32 uid = 7; */
        if (message.uid !== 0)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.uid);
        /* repeated ExhibitionDisplayInfo card_list = 4; */
        for (let i = 0; i < message.cardList.length; i++)
            ExhibitionDisplayInfo_1.ExhibitionDisplayInfo.internalBinaryWrite(message.cardList[i], writer.tag(4, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* ProfilePicture profile_picture = 8; */
        if (message.profilePicture)
            ProfilePicture_1.ProfilePicture.internalBinaryWrite(message.profilePicture, writer.tag(8, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* string nickname = 3; */
        if (message.nickname !== "")
            writer.tag(3, runtime_1.WireType.LengthDelimited).string(message.nickname);
        /* int64 param = 11; */
        if (message.param !== 0n)
            writer.tag(11, runtime_1.WireType.Varint).int64(message.param);
        /* uint32 statistic_id = 13; */
        if (message.statisticId !== 0)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.statisticId);
        /* string online_id = 5; */
        if (message.onlineId !== "")
            writer.tag(5, runtime_1.WireType.LengthDelimited).string(message.onlineId);
        /* uint32 head_image = 2; */
        if (message.headImage !== 0)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.headImage);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ScenePlayBattleSettlePlayerInfo
 */
exports.ScenePlayBattleSettlePlayerInfo = new ScenePlayBattleSettlePlayerInfo$Type();
