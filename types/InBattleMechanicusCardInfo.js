"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InBattleMechanicusCardInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const InBattleMechanicusCardChallengeState_1 = require("./InBattleMechanicusCardChallengeState");
// @generated message type with reflection information, may provide speed optimized methods
class InBattleMechanicusCardInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("InBattleMechanicusCardInfo", [
            { no: 2, name: "Unk3300_KCIEINMEPDH", kind: "scalar", jsonName: "Unk3300KCIEINMEPDH", T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "Unk3300_NDAOOKKGJPH", kind: "scalar", jsonName: "Unk3300NDAOOKKGJPH", T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "cost_points", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "card_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "Unk3300_FNAHKHODBKN", kind: "scalar", jsonName: "Unk3300FNAHKHODBKN", T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "challenge_state", kind: "enum", T: () => ["InBattleMechanicusCardChallengeState", InBattleMechanicusCardChallengeState_1.InBattleMechanicusCardChallengeState, "IN_BATTLE_MECHANICUS_CARD_CHALLENGE_STATE_"] }
        ]);
    }
    create(value) {
        const message = { unk3300KCIEINMEPDH: 0, unk3300NDAOOKKGJPH: 0, costPoints: 0, cardId: 0, unk3300FNAHKHODBKN: 0, challengeState: 0 };
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
                case /* uint32 Unk3300_KCIEINMEPDH = 2 [json_name = "Unk3300KCIEINMEPDH"];*/ 2:
                    message.unk3300KCIEINMEPDH = reader.uint32();
                    break;
                case /* uint32 Unk3300_NDAOOKKGJPH = 7 [json_name = "Unk3300NDAOOKKGJPH"];*/ 7:
                    message.unk3300NDAOOKKGJPH = reader.uint32();
                    break;
                case /* uint32 cost_points */ 5:
                    message.costPoints = reader.uint32();
                    break;
                case /* uint32 card_id */ 3:
                    message.cardId = reader.uint32();
                    break;
                case /* uint32 Unk3300_FNAHKHODBKN = 13 [json_name = "Unk3300FNAHKHODBKN"];*/ 13:
                    message.unk3300FNAHKHODBKN = reader.uint32();
                    break;
                case /* InBattleMechanicusCardChallengeState challenge_state */ 15:
                    message.challengeState = reader.int32();
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
        /* uint32 Unk3300_KCIEINMEPDH = 2 [json_name = "Unk3300KCIEINMEPDH"]; */
        if (message.unk3300KCIEINMEPDH !== 0)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.unk3300KCIEINMEPDH);
        /* uint32 Unk3300_NDAOOKKGJPH = 7 [json_name = "Unk3300NDAOOKKGJPH"]; */
        if (message.unk3300NDAOOKKGJPH !== 0)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.unk3300NDAOOKKGJPH);
        /* uint32 cost_points = 5; */
        if (message.costPoints !== 0)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.costPoints);
        /* uint32 card_id = 3; */
        if (message.cardId !== 0)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.cardId);
        /* uint32 Unk3300_FNAHKHODBKN = 13 [json_name = "Unk3300FNAHKHODBKN"]; */
        if (message.unk3300FNAHKHODBKN !== 0)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.unk3300FNAHKHODBKN);
        /* InBattleMechanicusCardChallengeState challenge_state = 15; */
        if (message.challengeState !== 0)
            writer.tag(15, runtime_1.WireType.Varint).int32(message.challengeState);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message InBattleMechanicusCardInfo
 */
exports.InBattleMechanicusCardInfo = new InBattleMechanicusCardInfo$Type();
