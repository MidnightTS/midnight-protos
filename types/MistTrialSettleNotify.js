"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MistTrialSettleNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const MistTrialBestAvatar_1 = require("./MistTrialBestAvatar");
// @generated message type with reflection information, may provide speed optimized methods
class MistTrialSettleNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("MistTrialSettleNotify", [
            { no: 5, name: "Unk3300_KFKHAACDJDJ", kind: "map", jsonName: "Unk3300KFKHAACDJDJ", K: 13 /*ScalarType.UINT32*/, V: { kind: "scalar", T: 13 /*ScalarType.UINT32*/ } },
            { no: 2, name: "Unk3300_GMPEELLANLI", kind: "map", jsonName: "Unk3300GMPEELLANLI", K: 13 /*ScalarType.UINT32*/, V: { kind: "scalar", T: 13 /*ScalarType.UINT32*/ } },
            { no: 12, name: "dungeon_scene_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "first_pass_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "best_hit_avatar", kind: "message", T: () => MistTrialBestAvatar_1.MistTrialBestAvatar },
            { no: 9, name: "best_avatar_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => MistTrialBestAvatar_1.MistTrialBestAvatar }
        ]);
    }
    create(value) {
        const message = { unk3300KFKHAACDJDJ: {}, unk3300GMPEELLANLI: {}, dungeonSceneId: 0, firstPassTime: 0, bestAvatarList: [] };
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
                case /* map<uint32, uint32> Unk3300_KFKHAACDJDJ = 5 [json_name = "Unk3300KFKHAACDJDJ"];*/ 5:
                    this.binaryReadMap5(message.unk3300KFKHAACDJDJ, reader, options);
                    break;
                case /* map<uint32, uint32> Unk3300_GMPEELLANLI = 2 [json_name = "Unk3300GMPEELLANLI"];*/ 2:
                    this.binaryReadMap2(message.unk3300GMPEELLANLI, reader, options);
                    break;
                case /* uint32 dungeon_scene_id */ 12:
                    message.dungeonSceneId = reader.uint32();
                    break;
                case /* uint32 first_pass_time */ 8:
                    message.firstPassTime = reader.uint32();
                    break;
                case /* MistTrialBestAvatar best_hit_avatar */ 3:
                    message.bestHitAvatar = MistTrialBestAvatar_1.MistTrialBestAvatar.internalBinaryRead(reader, reader.uint32(), options, message.bestHitAvatar);
                    break;
                case /* repeated MistTrialBestAvatar best_avatar_list */ 9:
                    message.bestAvatarList.push(MistTrialBestAvatar_1.MistTrialBestAvatar.internalBinaryRead(reader, reader.uint32(), options));
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
    binaryReadMap5(map, reader, options) {
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
                default: throw new globalThis.Error("unknown map entry field for field MistTrialSettleNotify.Unk3300_KFKHAACDJDJ");
            }
        }
        map[key ?? 0] = val ?? 0;
    }
    binaryReadMap2(map, reader, options) {
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
                default: throw new globalThis.Error("unknown map entry field for field MistTrialSettleNotify.Unk3300_GMPEELLANLI");
            }
        }
        map[key ?? 0] = val ?? 0;
    }
    internalBinaryWrite(message, writer, options) {
        /* map<uint32, uint32> Unk3300_KFKHAACDJDJ = 5 [json_name = "Unk3300KFKHAACDJDJ"]; */
        for (let k of Object.keys(message.unk3300KFKHAACDJDJ))
            writer.tag(5, runtime_1.WireType.LengthDelimited).fork().tag(1, runtime_1.WireType.Varint).uint32(parseInt(k)).tag(2, runtime_1.WireType.Varint).uint32(message.unk3300KFKHAACDJDJ[k]).join();
        /* map<uint32, uint32> Unk3300_GMPEELLANLI = 2 [json_name = "Unk3300GMPEELLANLI"]; */
        for (let k of Object.keys(message.unk3300GMPEELLANLI))
            writer.tag(2, runtime_1.WireType.LengthDelimited).fork().tag(1, runtime_1.WireType.Varint).uint32(parseInt(k)).tag(2, runtime_1.WireType.Varint).uint32(message.unk3300GMPEELLANLI[k]).join();
        /* uint32 dungeon_scene_id = 12; */
        if (message.dungeonSceneId !== 0)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.dungeonSceneId);
        /* uint32 first_pass_time = 8; */
        if (message.firstPassTime !== 0)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.firstPassTime);
        /* MistTrialBestAvatar best_hit_avatar = 3; */
        if (message.bestHitAvatar)
            MistTrialBestAvatar_1.MistTrialBestAvatar.internalBinaryWrite(message.bestHitAvatar, writer.tag(3, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* repeated MistTrialBestAvatar best_avatar_list = 9; */
        for (let i = 0; i < message.bestAvatarList.length; i++)
            MistTrialBestAvatar_1.MistTrialBestAvatar.internalBinaryWrite(message.bestAvatarList[i], writer.tag(9, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message MistTrialSettleNotify
 */
exports.MistTrialSettleNotify = new MistTrialSettleNotify$Type();
