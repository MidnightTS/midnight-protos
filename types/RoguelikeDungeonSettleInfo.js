"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoguelikeDungeonSettleInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const RoguelikeSettleCoinInfo_1 = require("./RoguelikeSettleCoinInfo");
// @generated message type with reflection information, may provide speed optimized methods
class RoguelikeDungeonSettleInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("RoguelikeDungeonSettleInfo", [
            { no: 9, name: "stage_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "Unk3300_GMMECMPDJMI", kind: "scalar", jsonName: "Unk3300GMMECMPDJMI", T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "Unk3300_PBELMOJKKHP", kind: "scalar", jsonName: "Unk3300PBELMOJKKHP", T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "cur_level", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "Unk3300_AHIEENGKPFA", kind: "scalar", jsonName: "Unk3300AHIEENGKPFA", T: 8 /*ScalarType.BOOL*/ },
            { no: 15, name: "Unk3300_BPLKJMIOKHM", kind: "scalar", jsonName: "Unk3300BPLKJMIOKHM", T: 8 /*ScalarType.BOOL*/ },
            { no: 6, name: "finished_challenge_cell_num_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "message", T: () => RoguelikeSettleCoinInfo_1.RoguelikeSettleCoinInfo } }
        ]);
    }
    create(value) {
        const message = { stageId: 0, unk3300GMMECMPDJMI: 0, unk3300PBELMOJKKHP: 0, curLevel: 0, unk3300AHIEENGKPFA: false, unk3300BPLKJMIOKHM: false, finishedChallengeCellNumMap: {} };
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
                case /* uint32 stage_id */ 9:
                    message.stageId = reader.uint32();
                    break;
                case /* uint32 Unk3300_GMMECMPDJMI = 8 [json_name = "Unk3300GMMECMPDJMI"];*/ 8:
                    message.unk3300GMMECMPDJMI = reader.uint32();
                    break;
                case /* uint32 Unk3300_PBELMOJKKHP = 4 [json_name = "Unk3300PBELMOJKKHP"];*/ 4:
                    message.unk3300PBELMOJKKHP = reader.uint32();
                    break;
                case /* uint32 cur_level */ 14:
                    message.curLevel = reader.uint32();
                    break;
                case /* bool Unk3300_AHIEENGKPFA = 10 [json_name = "Unk3300AHIEENGKPFA"];*/ 10:
                    message.unk3300AHIEENGKPFA = reader.bool();
                    break;
                case /* bool Unk3300_BPLKJMIOKHM = 15 [json_name = "Unk3300BPLKJMIOKHM"];*/ 15:
                    message.unk3300BPLKJMIOKHM = reader.bool();
                    break;
                case /* map<uint32, RoguelikeSettleCoinInfo> finished_challenge_cell_num_map */ 6:
                    this.binaryReadMap6(message.finishedChallengeCellNumMap, reader, options);
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
    binaryReadMap6(map, reader, options) {
        let len = reader.uint32(), end = reader.pos + len, key, val;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.uint32();
                    break;
                case 2:
                    val = RoguelikeSettleCoinInfo_1.RoguelikeSettleCoinInfo.internalBinaryRead(reader, reader.uint32(), options);
                    break;
                default: throw new globalThis.Error("unknown map entry field for field RoguelikeDungeonSettleInfo.finished_challenge_cell_num_map");
            }
        }
        map[key ?? 0] = val ?? RoguelikeSettleCoinInfo_1.RoguelikeSettleCoinInfo.create();
    }
    internalBinaryWrite(message, writer, options) {
        /* uint32 stage_id = 9; */
        if (message.stageId !== 0)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.stageId);
        /* uint32 Unk3300_GMMECMPDJMI = 8 [json_name = "Unk3300GMMECMPDJMI"]; */
        if (message.unk3300GMMECMPDJMI !== 0)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.unk3300GMMECMPDJMI);
        /* uint32 Unk3300_PBELMOJKKHP = 4 [json_name = "Unk3300PBELMOJKKHP"]; */
        if (message.unk3300PBELMOJKKHP !== 0)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.unk3300PBELMOJKKHP);
        /* uint32 cur_level = 14; */
        if (message.curLevel !== 0)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.curLevel);
        /* bool Unk3300_AHIEENGKPFA = 10 [json_name = "Unk3300AHIEENGKPFA"]; */
        if (message.unk3300AHIEENGKPFA !== false)
            writer.tag(10, runtime_1.WireType.Varint).bool(message.unk3300AHIEENGKPFA);
        /* bool Unk3300_BPLKJMIOKHM = 15 [json_name = "Unk3300BPLKJMIOKHM"]; */
        if (message.unk3300BPLKJMIOKHM !== false)
            writer.tag(15, runtime_1.WireType.Varint).bool(message.unk3300BPLKJMIOKHM);
        /* map<uint32, RoguelikeSettleCoinInfo> finished_challenge_cell_num_map = 6; */
        for (let k of Object.keys(message.finishedChallengeCellNumMap)) {
            writer.tag(6, runtime_1.WireType.LengthDelimited).fork().tag(1, runtime_1.WireType.Varint).uint32(parseInt(k));
            writer.tag(2, runtime_1.WireType.LengthDelimited).fork();
            RoguelikeSettleCoinInfo_1.RoguelikeSettleCoinInfo.internalBinaryWrite(message.finishedChallengeCellNumMap[k], writer, options);
            writer.join().join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message RoguelikeDungeonSettleInfo
 */
exports.RoguelikeDungeonSettleInfo = new RoguelikeDungeonSettleInfo$Type();
