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
            { no: 2, name: "Unk3300_CJFKCNCGJLB", kind: "scalar", jsonName: "Unk3300CJFKCNCGJLB", T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "attacker_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 1870, name: "Unk3300_GGABJNLLEAJ", kind: "scalar", jsonName: "Unk3300GGABJNLLEAJ", T: 13 /*ScalarType.UINT32*/ },
            { no: 803, name: "Unk3300_HGJOKFPHMJJ", kind: "scalar", jsonName: "Unk3300HGJOKFPHMJJ", T: 2 /*ScalarType.FLOAT*/ },
            { no: 454, name: "Unk3300_DOMAOPGPHMD", kind: "scalar", jsonName: "Unk3300DOMAOPGPHMD", T: 8 /*ScalarType.BOOL*/ },
            { no: 12, name: "element_type", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 1438, name: "Unk3300_BALCPHMFIBC", kind: "scalar", jsonName: "Unk3300BALCPHMFIBC", T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "damage", kind: "scalar", T: 2 /*ScalarType.FLOAT*/ },
            { no: 1115, name: "Unk3300_HEIMDHBPFNF", kind: "scalar", jsonName: "Unk3300HEIMDHBPFNF", T: 13 /*ScalarType.UINT32*/ },
            { no: 645, name: "Unk3300_HNKLIODEJAB", kind: "scalar", jsonName: "Unk3300HNKLIODEJAB", T: 13 /*ScalarType.UINT32*/ },
            { no: 1742, name: "Unk3300_ABJJNNNKGBB", kind: "scalar", jsonName: "Unk3300ABJJNNNKGBB", T: 13 /*ScalarType.UINT32*/ },
            { no: 2012, name: "Unk3300_KPKAECBFABP", kind: "scalar", jsonName: "Unk3300KPKAECBFABP", T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "hit_eff_result", kind: "message", T: () => AttackHitEffectResult_1.AttackHitEffectResult },
            { no: 14, name: "Unk3300_EIGMFDMKADE", kind: "scalar", jsonName: "Unk3300EIGMFDMKADE", T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "ability_identifier", kind: "message", T: () => AbilityIdentifier_1.AbilityIdentifier },
            { no: 3, name: "Unk3300_IPPHJMMELIG", kind: "scalar", jsonName: "Unk3300IPPHJMMELIG", T: 13 /*ScalarType.UINT32*/ },
            { no: 1782, name: "Unk3300_EBCNAAJAONF", kind: "scalar", jsonName: "Unk3300EBCNAAJAONF", T: 13 /*ScalarType.UINT32*/ },
            { no: 1932, name: "Unk3300_MEFFADEPHBM", kind: "scalar", jsonName: "Unk3300MEFFADEPHBM", T: 2 /*ScalarType.FLOAT*/ },
            { no: 1484, name: "Unk3300_PIGBELICMMD", kind: "scalar", jsonName: "Unk3300PIGBELICMMD", T: 13 /*ScalarType.UINT32*/ },
            { no: 633, name: "Unk3300_PJPCBIACFJK", kind: "scalar", jsonName: "Unk3300PJPCBIACFJK", T: 8 /*ScalarType.BOOL*/ },
            { no: 5, name: "hit_retreat_angle_compat", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 15, name: "hit_collision", kind: "message", T: () => HitCollision_1.HitCollision },
            { no: 732, name: "Unk3300_MGIMJGMIPLD", kind: "scalar", jsonName: "Unk3300MGIMJGMIPLD", T: 8 /*ScalarType.BOOL*/ },
            { no: 6, name: "Unk3300_GBKCGDPAJIE", kind: "scalar", jsonName: "Unk3300GBKCGDPAJIE", T: 8 /*ScalarType.BOOL*/ },
            { no: 11, name: "resolved_dir", kind: "message", T: () => Vector_1.Vector },
            { no: 28, name: "Unk3300_MPKAMIMDKOE", kind: "scalar", jsonName: "Unk3300MPKAMIMDKOE", T: 2 /*ScalarType.FLOAT*/ },
            { no: 4, name: "anim_event_id", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 1844, name: "Unk3300_GBPJCELJKJA", kind: "scalar", jsonName: "Unk3300GBPJCELJKJA", T: 13 /*ScalarType.UINT32*/ },
            { no: 914, name: "Unk3300_JMJHGJCAOBH", kind: "scalar", jsonName: "Unk3300JMJHGJCAOBH", T: 13 /*ScalarType.UINT32*/ },
            { no: 775, name: "Unk3300_FJJLKJBOBAC", kind: "scalar", jsonName: "Unk3300FJJLKJBOBAC", T: 2 /*ScalarType.FLOAT*/ }
        ]);
    }
    create(value) {
        const message = { unk3300CJFKCNCGJLB: 0, attackerId: 0, unk3300GGABJNLLEAJ: 0, unk3300HGJOKFPHMJJ: 0, unk3300DOMAOPGPHMD: false, elementType: 0, unk3300BALCPHMFIBC: 0, damage: 0, unk3300HEIMDHBPFNF: 0, unk3300HNKLIODEJAB: 0, unk3300ABJJNNNKGBB: 0, unk3300KPKAECBFABP: 0, unk3300EIGMFDMKADE: 0, unk3300IPPHJMMELIG: 0, unk3300EBCNAAJAONF: 0, unk3300MEFFADEPHBM: 0, unk3300PIGBELICMMD: 0, unk3300PJPCBIACFJK: false, hitRetreatAngleCompat: 0, unk3300MGIMJGMIPLD: false, unk3300GBKCGDPAJIE: false, unk3300MPKAMIMDKOE: 0, animEventId: "", unk3300GBPJCELJKJA: 0, unk3300JMJHGJCAOBH: 0, unk3300FJJLKJBOBAC: 0 };
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
                case /* uint32 Unk3300_CJFKCNCGJLB = 2 [json_name = "Unk3300CJFKCNCGJLB"];*/ 2:
                    message.unk3300CJFKCNCGJLB = reader.uint32();
                    break;
                case /* uint32 attacker_id */ 1:
                    message.attackerId = reader.uint32();
                    break;
                case /* uint32 Unk3300_GGABJNLLEAJ = 1870 [json_name = "Unk3300GGABJNLLEAJ"];*/ 1870:
                    message.unk3300GGABJNLLEAJ = reader.uint32();
                    break;
                case /* float Unk3300_HGJOKFPHMJJ = 803 [json_name = "Unk3300HGJOKFPHMJJ"];*/ 803:
                    message.unk3300HGJOKFPHMJJ = reader.float();
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
                case /* uint32 Unk3300_HEIMDHBPFNF = 1115 [json_name = "Unk3300HEIMDHBPFNF"];*/ 1115:
                    message.unk3300HEIMDHBPFNF = reader.uint32();
                    break;
                case /* uint32 Unk3300_HNKLIODEJAB = 645 [json_name = "Unk3300HNKLIODEJAB"];*/ 645:
                    message.unk3300HNKLIODEJAB = reader.uint32();
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
                case /* uint32 Unk3300_EIGMFDMKADE = 14 [json_name = "Unk3300EIGMFDMKADE"];*/ 14:
                    message.unk3300EIGMFDMKADE = reader.uint32();
                    break;
                case /* AbilityIdentifier ability_identifier */ 7:
                    message.abilityIdentifier = AbilityIdentifier_1.AbilityIdentifier.internalBinaryRead(reader, reader.uint32(), options, message.abilityIdentifier);
                    break;
                case /* uint32 Unk3300_IPPHJMMELIG = 3 [json_name = "Unk3300IPPHJMMELIG"];*/ 3:
                    message.unk3300IPPHJMMELIG = reader.uint32();
                    break;
                case /* uint32 Unk3300_EBCNAAJAONF = 1782 [json_name = "Unk3300EBCNAAJAONF"];*/ 1782:
                    message.unk3300EBCNAAJAONF = reader.uint32();
                    break;
                case /* float Unk3300_MEFFADEPHBM = 1932 [json_name = "Unk3300MEFFADEPHBM"];*/ 1932:
                    message.unk3300MEFFADEPHBM = reader.float();
                    break;
                case /* uint32 Unk3300_PIGBELICMMD = 1484 [json_name = "Unk3300PIGBELICMMD"];*/ 1484:
                    message.unk3300PIGBELICMMD = reader.uint32();
                    break;
                case /* bool Unk3300_PJPCBIACFJK = 633 [json_name = "Unk3300PJPCBIACFJK"];*/ 633:
                    message.unk3300PJPCBIACFJK = reader.bool();
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
                case /* bool Unk3300_GBKCGDPAJIE = 6 [json_name = "Unk3300GBKCGDPAJIE"];*/ 6:
                    message.unk3300GBKCGDPAJIE = reader.bool();
                    break;
                case /* Vector resolved_dir */ 11:
                    message.resolvedDir = Vector_1.Vector.internalBinaryRead(reader, reader.uint32(), options, message.resolvedDir);
                    break;
                case /* float Unk3300_MPKAMIMDKOE = 28 [json_name = "Unk3300MPKAMIMDKOE"];*/ 28:
                    message.unk3300MPKAMIMDKOE = reader.float();
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
                case /* float Unk3300_FJJLKJBOBAC = 775 [json_name = "Unk3300FJJLKJBOBAC"];*/ 775:
                    message.unk3300FJJLKJBOBAC = reader.float();
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
        /* uint32 Unk3300_CJFKCNCGJLB = 2 [json_name = "Unk3300CJFKCNCGJLB"]; */
        if (message.unk3300CJFKCNCGJLB !== 0)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.unk3300CJFKCNCGJLB);
        /* uint32 attacker_id = 1; */
        if (message.attackerId !== 0)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.attackerId);
        /* uint32 Unk3300_GGABJNLLEAJ = 1870 [json_name = "Unk3300GGABJNLLEAJ"]; */
        if (message.unk3300GGABJNLLEAJ !== 0)
            writer.tag(1870, runtime_1.WireType.Varint).uint32(message.unk3300GGABJNLLEAJ);
        /* float Unk3300_HGJOKFPHMJJ = 803 [json_name = "Unk3300HGJOKFPHMJJ"]; */
        if (message.unk3300HGJOKFPHMJJ !== 0)
            writer.tag(803, runtime_1.WireType.Bit32).float(message.unk3300HGJOKFPHMJJ);
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
        /* uint32 Unk3300_HEIMDHBPFNF = 1115 [json_name = "Unk3300HEIMDHBPFNF"]; */
        if (message.unk3300HEIMDHBPFNF !== 0)
            writer.tag(1115, runtime_1.WireType.Varint).uint32(message.unk3300HEIMDHBPFNF);
        /* uint32 Unk3300_HNKLIODEJAB = 645 [json_name = "Unk3300HNKLIODEJAB"]; */
        if (message.unk3300HNKLIODEJAB !== 0)
            writer.tag(645, runtime_1.WireType.Varint).uint32(message.unk3300HNKLIODEJAB);
        /* uint32 Unk3300_ABJJNNNKGBB = 1742 [json_name = "Unk3300ABJJNNNKGBB"]; */
        if (message.unk3300ABJJNNNKGBB !== 0)
            writer.tag(1742, runtime_1.WireType.Varint).uint32(message.unk3300ABJJNNNKGBB);
        /* uint32 Unk3300_KPKAECBFABP = 2012 [json_name = "Unk3300KPKAECBFABP"]; */
        if (message.unk3300KPKAECBFABP !== 0)
            writer.tag(2012, runtime_1.WireType.Varint).uint32(message.unk3300KPKAECBFABP);
        /* AttackHitEffectResult hit_eff_result = 8; */
        if (message.hitEffResult)
            AttackHitEffectResult_1.AttackHitEffectResult.internalBinaryWrite(message.hitEffResult, writer.tag(8, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* uint32 Unk3300_EIGMFDMKADE = 14 [json_name = "Unk3300EIGMFDMKADE"]; */
        if (message.unk3300EIGMFDMKADE !== 0)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.unk3300EIGMFDMKADE);
        /* AbilityIdentifier ability_identifier = 7; */
        if (message.abilityIdentifier)
            AbilityIdentifier_1.AbilityIdentifier.internalBinaryWrite(message.abilityIdentifier, writer.tag(7, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* uint32 Unk3300_IPPHJMMELIG = 3 [json_name = "Unk3300IPPHJMMELIG"]; */
        if (message.unk3300IPPHJMMELIG !== 0)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.unk3300IPPHJMMELIG);
        /* uint32 Unk3300_EBCNAAJAONF = 1782 [json_name = "Unk3300EBCNAAJAONF"]; */
        if (message.unk3300EBCNAAJAONF !== 0)
            writer.tag(1782, runtime_1.WireType.Varint).uint32(message.unk3300EBCNAAJAONF);
        /* float Unk3300_MEFFADEPHBM = 1932 [json_name = "Unk3300MEFFADEPHBM"]; */
        if (message.unk3300MEFFADEPHBM !== 0)
            writer.tag(1932, runtime_1.WireType.Bit32).float(message.unk3300MEFFADEPHBM);
        /* uint32 Unk3300_PIGBELICMMD = 1484 [json_name = "Unk3300PIGBELICMMD"]; */
        if (message.unk3300PIGBELICMMD !== 0)
            writer.tag(1484, runtime_1.WireType.Varint).uint32(message.unk3300PIGBELICMMD);
        /* bool Unk3300_PJPCBIACFJK = 633 [json_name = "Unk3300PJPCBIACFJK"]; */
        if (message.unk3300PJPCBIACFJK !== false)
            writer.tag(633, runtime_1.WireType.Varint).bool(message.unk3300PJPCBIACFJK);
        /* int32 hit_retreat_angle_compat = 5; */
        if (message.hitRetreatAngleCompat !== 0)
            writer.tag(5, runtime_1.WireType.Varint).int32(message.hitRetreatAngleCompat);
        /* HitCollision hit_collision = 15; */
        if (message.hitCollision)
            HitCollision_1.HitCollision.internalBinaryWrite(message.hitCollision, writer.tag(15, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* bool Unk3300_MGIMJGMIPLD = 732 [json_name = "Unk3300MGIMJGMIPLD"]; */
        if (message.unk3300MGIMJGMIPLD !== false)
            writer.tag(732, runtime_1.WireType.Varint).bool(message.unk3300MGIMJGMIPLD);
        /* bool Unk3300_GBKCGDPAJIE = 6 [json_name = "Unk3300GBKCGDPAJIE"]; */
        if (message.unk3300GBKCGDPAJIE !== false)
            writer.tag(6, runtime_1.WireType.Varint).bool(message.unk3300GBKCGDPAJIE);
        /* Vector resolved_dir = 11; */
        if (message.resolvedDir)
            Vector_1.Vector.internalBinaryWrite(message.resolvedDir, writer.tag(11, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* float Unk3300_MPKAMIMDKOE = 28 [json_name = "Unk3300MPKAMIMDKOE"]; */
        if (message.unk3300MPKAMIMDKOE !== 0)
            writer.tag(28, runtime_1.WireType.Bit32).float(message.unk3300MPKAMIMDKOE);
        /* string anim_event_id = 4; */
        if (message.animEventId !== "")
            writer.tag(4, runtime_1.WireType.LengthDelimited).string(message.animEventId);
        /* uint32 Unk3300_GBPJCELJKJA = 1844 [json_name = "Unk3300GBPJCELJKJA"]; */
        if (message.unk3300GBPJCELJKJA !== 0)
            writer.tag(1844, runtime_1.WireType.Varint).uint32(message.unk3300GBPJCELJKJA);
        /* uint32 Unk3300_JMJHGJCAOBH = 914 [json_name = "Unk3300JMJHGJCAOBH"]; */
        if (message.unk3300JMJHGJCAOBH !== 0)
            writer.tag(914, runtime_1.WireType.Varint).uint32(message.unk3300JMJHGJCAOBH);
        /* float Unk3300_FJJLKJBOBAC = 775 [json_name = "Unk3300FJJLKJBOBAC"]; */
        if (message.unk3300FJJLKJBOBAC !== 0)
            writer.tag(775, runtime_1.WireType.Bit32).float(message.unk3300FJJLKJBOBAC);
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
