"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttackResult = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const Vector_1 = require("./Vector");
const HitCollision_1 = require("./HitCollision");
const AbilityIdentifier_1 = require("./AbilityIdentifier");
const AttackHitEffectResult_1 = require("./AttackHitEffectResult");
// @generated message type with reflection information, may provide speed optimized methods
class AttackResult$Type extends runtime_5.MessageType {
    constructor() {
        super("AttackResult", [
            { no: 2, name: "defense_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "attacker_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 1870, name: "target_type", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 803, name: "endure_delta", kind: "scalar", T: 2 /*ScalarType.FLOAT*/ },
            { no: 454, name: "Unk3300_DOMAOPGPHMD", kind: "scalar", jsonName: "Unk3300DOMAOPGPHMD", T: 8 /*ScalarType.BOOL*/ },
            { no: 12, name: "element_type", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 1438, name: "Unk3300_BALCPHMFIBC", kind: "scalar", jsonName: "Unk3300BALCPHMFIBC", T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "damage", kind: "scalar", T: 2 /*ScalarType.FLOAT*/ },
            { no: 1115, name: "hashed_anim_event_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 645, name: "critical_rand", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 1742, name: "Unk3300_ABJJNNNKGBB", kind: "scalar", jsonName: "Unk3300ABJJNNNKGBB", T: 13 /*ScalarType.UINT32*/ },
            { no: 2012, name: "Unk3300_KPKAECBFABP", kind: "scalar", jsonName: "Unk3300KPKAECBFABP", T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "hit_eff_result", kind: "message", T: () => AttackHitEffectResult_1.AttackHitEffectResult },
            { no: 14, name: "endure_break", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "ability_identifier", kind: "message", T: () => AbilityIdentifier_1.AbilityIdentifier },
            { no: 3, name: "hit_pos_type", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 1782, name: "attack_timestamp_ms", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 1932, name: "damage_shield", kind: "scalar", T: 2 /*ScalarType.FLOAT*/ },
            { no: 1484, name: "attack_count", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 633, name: "is_resist_text", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 5, name: "hit_retreat_angle_compat", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 15, name: "hit_collision", kind: "message", T: () => HitCollision_1.HitCollision },
            { no: 732, name: "Unk3300_MGIMJGMIPLD", kind: "scalar", jsonName: "Unk3300MGIMJGMIPLD", T: 8 /*ScalarType.BOOL*/ },
            { no: 6, name: "is_crit", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 11, name: "resolved_dir", kind: "message", T: () => Vector_1.Vector },
            { no: 28, name: "element_amplify_rate", kind: "scalar", T: 2 /*ScalarType.FLOAT*/ },
            { no: 4, name: "anim_event_id", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 1844, name: "Unk3300_GBPJCELJKJA", kind: "scalar", jsonName: "Unk3300GBPJCELJKJA", T: 13 /*ScalarType.UINT32*/ },
            { no: 914, name: "Unk3300_JMJHGJCAOBH", kind: "scalar", jsonName: "Unk3300JMJHGJCAOBH", T: 13 /*ScalarType.UINT32*/ },
            { no: 775, name: "element_durability_attenuation", kind: "scalar", T: 2 /*ScalarType.FLOAT*/ }
        ]);
    }
    create(value) {
        const message = { defenseId: 0, attackerId: 0, targetType: 0, endureDelta: 0, unk3300DOMAOPGPHMD: false, elementType: 0, unk3300BALCPHMFIBC: 0, damage: 0, hashedAnimEventId: 0, criticalRand: 0, unk3300ABJJNNNKGBB: 0, unk3300KPKAECBFABP: 0, endureBreak: 0, hitPosType: 0, attackTimestampMs: 0, damageShield: 0, attackCount: 0, isResistText: false, hitRetreatAngleCompat: 0, unk3300MGIMJGMIPLD: false, isCrit: false, elementAmplifyRate: 0, animEventId: "", unk3300GBPJCELJKJA: 0, unk3300JMJHGJCAOBH: 0, elementDurabilityAttenuation: 0 };
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
                case /* uint32 defense_id */ 2:
                    message.defenseId = reader.uint32();
                    break;
                case /* uint32 attacker_id */ 1:
                    message.attackerId = reader.uint32();
                    break;
                case /* uint32 target_type */ 1870:
                    message.targetType = reader.uint32();
                    break;
                case /* float endure_delta */ 803:
                    message.endureDelta = reader.float();
                    break;
                case /* bool Unk3300_DOMAOPGPHMD = 454 [json_name = "Unk3300DOMAOPGPHMD"];*/ 454:
                    message.unk3300DOMAOPGPHMD = reader.bool();
                    break;
                case /* uint32 element_type */ 12:
                    message.elementType = reader.uint32();
                    break;
                case /* uint32 Unk3300_BALCPHMFIBC = 1438 [json_name = "Unk3300BALCPHMFIBC"];*/ 1438:
                    message.unk3300BALCPHMFIBC = reader.uint32();
                    break;
                case /* float damage */ 10:
                    message.damage = reader.float();
                    break;
                case /* uint32 hashed_anim_event_id */ 1115:
                    message.hashedAnimEventId = reader.uint32();
                    break;
                case /* uint32 critical_rand */ 645:
                    message.criticalRand = reader.uint32();
                    break;
                case /* uint32 Unk3300_ABJJNNNKGBB = 1742 [json_name = "Unk3300ABJJNNNKGBB"];*/ 1742:
                    message.unk3300ABJJNNNKGBB = reader.uint32();
                    break;
                case /* uint32 Unk3300_KPKAECBFABP = 2012 [json_name = "Unk3300KPKAECBFABP"];*/ 2012:
                    message.unk3300KPKAECBFABP = reader.uint32();
                    break;
                case /* AttackHitEffectResult hit_eff_result */ 8:
                    message.hitEffResult = AttackHitEffectResult_1.AttackHitEffectResult.internalBinaryRead(reader, reader.uint32(), options, message.hitEffResult);
                    break;
                case /* uint32 endure_break */ 14:
                    message.endureBreak = reader.uint32();
                    break;
                case /* AbilityIdentifier ability_identifier */ 7:
                    message.abilityIdentifier = AbilityIdentifier_1.AbilityIdentifier.internalBinaryRead(reader, reader.uint32(), options, message.abilityIdentifier);
                    break;
                case /* uint32 hit_pos_type */ 3:
                    message.hitPosType = reader.uint32();
                    break;
                case /* uint32 attack_timestamp_ms */ 1782:
                    message.attackTimestampMs = reader.uint32();
                    break;
                case /* float damage_shield */ 1932:
                    message.damageShield = reader.float();
                    break;
                case /* uint32 attack_count */ 1484:
                    message.attackCount = reader.uint32();
                    break;
                case /* bool is_resist_text */ 633:
                    message.isResistText = reader.bool();
                    break;
                case /* int32 hit_retreat_angle_compat */ 5:
                    message.hitRetreatAngleCompat = reader.int32();
                    break;
                case /* HitCollision hit_collision */ 15:
                    message.hitCollision = HitCollision_1.HitCollision.internalBinaryRead(reader, reader.uint32(), options, message.hitCollision);
                    break;
                case /* bool Unk3300_MGIMJGMIPLD = 732 [json_name = "Unk3300MGIMJGMIPLD"];*/ 732:
                    message.unk3300MGIMJGMIPLD = reader.bool();
                    break;
                case /* bool is_crit */ 6:
                    message.isCrit = reader.bool();
                    break;
                case /* Vector resolved_dir */ 11:
                    message.resolvedDir = Vector_1.Vector.internalBinaryRead(reader, reader.uint32(), options, message.resolvedDir);
                    break;
                case /* float element_amplify_rate */ 28:
                    message.elementAmplifyRate = reader.float();
                    break;
                case /* string anim_event_id */ 4:
                    message.animEventId = reader.string();
                    break;
                case /* uint32 Unk3300_GBPJCELJKJA = 1844 [json_name = "Unk3300GBPJCELJKJA"];*/ 1844:
                    message.unk3300GBPJCELJKJA = reader.uint32();
                    break;
                case /* uint32 Unk3300_JMJHGJCAOBH = 914 [json_name = "Unk3300JMJHGJCAOBH"];*/ 914:
                    message.unk3300JMJHGJCAOBH = reader.uint32();
                    break;
                case /* float element_durability_attenuation */ 775:
                    message.elementDurabilityAttenuation = reader.float();
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
        /* uint32 defense_id = 2; */
        if (message.defenseId !== 0)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.defenseId);
        /* uint32 attacker_id = 1; */
        if (message.attackerId !== 0)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.attackerId);
        /* uint32 target_type = 1870; */
        if (message.targetType !== 0)
            writer.tag(1870, runtime_1.WireType.Varint).uint32(message.targetType);
        /* float endure_delta = 803; */
        if (message.endureDelta !== 0)
            writer.tag(803, runtime_1.WireType.Bit32).float(message.endureDelta);
        /* bool Unk3300_DOMAOPGPHMD = 454 [json_name = "Unk3300DOMAOPGPHMD"]; */
        if (message.unk3300DOMAOPGPHMD !== false)
            writer.tag(454, runtime_1.WireType.Varint).bool(message.unk3300DOMAOPGPHMD);
        /* uint32 element_type = 12; */
        if (message.elementType !== 0)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.elementType);
        /* uint32 Unk3300_BALCPHMFIBC = 1438 [json_name = "Unk3300BALCPHMFIBC"]; */
        if (message.unk3300BALCPHMFIBC !== 0)
            writer.tag(1438, runtime_1.WireType.Varint).uint32(message.unk3300BALCPHMFIBC);
        /* float damage = 10; */
        if (message.damage !== 0)
            writer.tag(10, runtime_1.WireType.Bit32).float(message.damage);
        /* uint32 hashed_anim_event_id = 1115; */
        if (message.hashedAnimEventId !== 0)
            writer.tag(1115, runtime_1.WireType.Varint).uint32(message.hashedAnimEventId);
        /* uint32 critical_rand = 645; */
        if (message.criticalRand !== 0)
            writer.tag(645, runtime_1.WireType.Varint).uint32(message.criticalRand);
        /* uint32 Unk3300_ABJJNNNKGBB = 1742 [json_name = "Unk3300ABJJNNNKGBB"]; */
        if (message.unk3300ABJJNNNKGBB !== 0)
            writer.tag(1742, runtime_1.WireType.Varint).uint32(message.unk3300ABJJNNNKGBB);
        /* uint32 Unk3300_KPKAECBFABP = 2012 [json_name = "Unk3300KPKAECBFABP"]; */
        if (message.unk3300KPKAECBFABP !== 0)
            writer.tag(2012, runtime_1.WireType.Varint).uint32(message.unk3300KPKAECBFABP);
        /* AttackHitEffectResult hit_eff_result = 8; */
        if (message.hitEffResult)
            AttackHitEffectResult_1.AttackHitEffectResult.internalBinaryWrite(message.hitEffResult, writer.tag(8, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* uint32 endure_break = 14; */
        if (message.endureBreak !== 0)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.endureBreak);
        /* AbilityIdentifier ability_identifier = 7; */
        if (message.abilityIdentifier)
            AbilityIdentifier_1.AbilityIdentifier.internalBinaryWrite(message.abilityIdentifier, writer.tag(7, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* uint32 hit_pos_type = 3; */
        if (message.hitPosType !== 0)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.hitPosType);
        /* uint32 attack_timestamp_ms = 1782; */
        if (message.attackTimestampMs !== 0)
            writer.tag(1782, runtime_1.WireType.Varint).uint32(message.attackTimestampMs);
        /* float damage_shield = 1932; */
        if (message.damageShield !== 0)
            writer.tag(1932, runtime_1.WireType.Bit32).float(message.damageShield);
        /* uint32 attack_count = 1484; */
        if (message.attackCount !== 0)
            writer.tag(1484, runtime_1.WireType.Varint).uint32(message.attackCount);
        /* bool is_resist_text = 633; */
        if (message.isResistText !== false)
            writer.tag(633, runtime_1.WireType.Varint).bool(message.isResistText);
        /* int32 hit_retreat_angle_compat = 5; */
        if (message.hitRetreatAngleCompat !== 0)
            writer.tag(5, runtime_1.WireType.Varint).int32(message.hitRetreatAngleCompat);
        /* HitCollision hit_collision = 15; */
        if (message.hitCollision)
            HitCollision_1.HitCollision.internalBinaryWrite(message.hitCollision, writer.tag(15, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* bool Unk3300_MGIMJGMIPLD = 732 [json_name = "Unk3300MGIMJGMIPLD"]; */
        if (message.unk3300MGIMJGMIPLD !== false)
            writer.tag(732, runtime_1.WireType.Varint).bool(message.unk3300MGIMJGMIPLD);
        /* bool is_crit = 6; */
        if (message.isCrit !== false)
            writer.tag(6, runtime_1.WireType.Varint).bool(message.isCrit);
        /* Vector resolved_dir = 11; */
        if (message.resolvedDir)
            Vector_1.Vector.internalBinaryWrite(message.resolvedDir, writer.tag(11, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* float element_amplify_rate = 28; */
        if (message.elementAmplifyRate !== 0)
            writer.tag(28, runtime_1.WireType.Bit32).float(message.elementAmplifyRate);
        /* string anim_event_id = 4; */
        if (message.animEventId !== "")
            writer.tag(4, runtime_1.WireType.LengthDelimited).string(message.animEventId);
        /* uint32 Unk3300_GBPJCELJKJA = 1844 [json_name = "Unk3300GBPJCELJKJA"]; */
        if (message.unk3300GBPJCELJKJA !== 0)
            writer.tag(1844, runtime_1.WireType.Varint).uint32(message.unk3300GBPJCELJKJA);
        /* uint32 Unk3300_JMJHGJCAOBH = 914 [json_name = "Unk3300JMJHGJCAOBH"]; */
        if (message.unk3300JMJHGJCAOBH !== 0)
            writer.tag(914, runtime_1.WireType.Varint).uint32(message.unk3300JMJHGJCAOBH);
        /* float element_durability_attenuation = 775; */
        if (message.elementDurabilityAttenuation !== 0)
            writer.tag(775, runtime_1.WireType.Bit32).float(message.elementDurabilityAttenuation);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message AttackResult
 */
exports.AttackResult = new AttackResult$Type();
